'use server';

import { unstable_noStore as noStore } from 'next/cache';

import {
  STATUS_CREATED,
  STATUS_NOT_FOUND,
} from '@/constants/network-status-codes';
import { userNameSchema } from '@/schema/user-schema';
import { UserDatabase } from '@/services/user-database';
import { supabaseClient } from '@/libs/supabase-client';
import { ErrorResponse } from '@/utils/error-response';
import { isValueMatchSchema } from '@/utils/is-value-match-schema';
import { createNetworkResponse } from '@/utils/create-network-response';
import { getUserIdFromSession } from '@/services/get-user-id-from-session';
import { FEEDBACK_USER_NAME_FORMAT_INVALID } from '@/constants/feedback-messages';

import { checkUserNameExistence } from './check-user-name-existence';

export const storeUserName = async (userName: string) => {
  noStore();

  try {
    if (!isValueMatchSchema(userName, userNameSchema)) {
      return ErrorResponse.badRequest(FEEDBACK_USER_NAME_FORMAT_INVALID);
    }

    const existResponse = await checkUserNameExistence(userName);
    if (existResponse.status !== STATUS_NOT_FOUND) {
      return existResponse;
    }

    const userID = await getUserIdFromSession();
    if (!userID) {
      return ErrorResponse.internalServerError();
    }

    const storageResponse = await storeUserNameInDatabase(userName, userID);
    if (storageResponse.error) {
      return ErrorResponse.badRequest(FEEDBACK_USER_NAME_FORMAT_INVALID);
    }

    return createNetworkResponse({ status: STATUS_CREATED });
  } catch {
    return ErrorResponse.internalServerError();
  }
};

const storeUserNameInDatabase = async (userName: string, userID: string) =>
  new UserDatabase(await supabaseClient()).storeUserName(userName, userID);
