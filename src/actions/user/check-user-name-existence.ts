'use server';

import { unstable_noStore as noStore } from 'next/cache';

import { UserDatabase } from '@/services/user-database';
import { ErrorResponse } from '@/utils/error-response';
import { supabaseClient } from '@/libs/supabase-client';
import { createNetworkResponse } from '@/utils/create-network-response';
import { STATUS_OK, STATUS_NOT_FOUND } from '@/constants/network-status-codes';
import { FEEDBACK_USER_NAME_FORMAT_INVALID } from '@/constants/feedback-messages';

export const checkUserNameExistence = async (userName: string) => {
  noStore();

  try {
    const userDatabase = new UserDatabase(await supabaseClient());
    const { data, error } = await userDatabase.checkUserName(userName);

    if (error) throw error;

    return createNetworkResponse({
      status: data && data.length > 0 ? STATUS_OK : STATUS_NOT_FOUND,
    });
  } catch (error) {
    return handleCheckUserNameError(error);
  }
};

const handleCheckUserNameError = (error: unknown) => {
  // @ts-ignore @audit - Find a better way to perform the code check
  if (error && error.code) {
    return ErrorResponse.badRequest(FEEDBACK_USER_NAME_FORMAT_INVALID);
  }
  return ErrorResponse.internalServerError();
};
