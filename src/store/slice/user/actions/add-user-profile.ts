import { PayloadAction } from '@reduxjs/toolkit';

import type { UserState } from '../_type';

export const addUserProfile = (
  state: UserState,
  action: PayloadAction<UserState['profile']>,
) => {
  const update = {
    ...state,
    profile: action.payload,
    // isPresent: true,
  } satisfies UserState;

  return update;
};
