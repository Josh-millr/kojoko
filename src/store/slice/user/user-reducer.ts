import { createSlice } from '@reduxjs/toolkit';

import type { UserState } from './_type';
import { addUserProfile } from './actions/add-user-profile';

const initialState = {
  profile: null,
  isPresent: false,
} as UserState;

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: { addUserProfile },
});

export const userActions = userSlice.actions;
export default userSlice.reducer;
