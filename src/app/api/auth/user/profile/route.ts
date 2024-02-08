import { NextResponse } from 'next/server';
import { PostgrestSingleResponse } from '@supabase/supabase-js';

import {
  STATUS_INTERNAL_SERVER_ERROR,
  STATUS_OK,
} from '@/constants/network-status-codes';
import { Tables } from '@/types/database';
import { ErrorResponse } from '@/utils/error-response';
import { UserDatabase } from '@/services/user-database';
import { supabaseClient } from '@/libs/supabase-client';
import { FEEDBACK_USER_NOT_EXIST } from '@/constants/feedback-messages';
import { createNetworkResponse } from '@/utils/create-network-response';
import { getUserIdFromSession } from '@/services/get-user-id-from-session';

type UserProfile = Tables<'user_profiles'>[];
type QueryResponse = PostgrestSingleResponse<UserProfile>;

export async function GET(request: Request) {
  try {
    const userID = await getUserIdFromSession();
    if (!userID) {
      return returnToLogin(request.url);
    }

    const response = await new UserDatabase(
      await supabaseClient(),
    ).fetchUserProfile(userID);

    return handleResponse(response);
  } catch {
    return handleUnexpectedError();
  }
}

const returnToLogin = (baseUrl: string) =>
  NextResponse.redirect(new URL('/auth', baseUrl));

const handleResponse = (response: QueryResponse) => {
  if (isUserProfileAvail(response.data)) {
    return handleSuccess(response.data as UserProfile);
  }
  return ErrorResponse.notFound(FEEDBACK_USER_NOT_EXIST);
};

const isUserProfileAvail = (data: UserProfile | null) =>
  data && data.length > 0;

const handleSuccess = (data: UserProfile) => {
  const { id, ...dataWithoutId } = data[0];
  return NextResponse.json(
    createNetworkResponse({ data: dataWithoutId, status: STATUS_OK }),
    { status: STATUS_OK },
  );
};

const handleUnexpectedError = () =>
  NextResponse.json(ErrorResponse.internalServerError(), {
    status: STATUS_INTERNAL_SERVER_ERROR,
  });
