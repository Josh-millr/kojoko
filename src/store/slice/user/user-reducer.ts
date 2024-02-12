/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

import type { UserState } from './_type';
import { addUserProfile } from './actions/add-user-profile';
import { fetchUserProfile } from './thunk/fetch-user-profile';

const initialState = {
  profile: null,
  status: 'unknown',
} as UserState;

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: { addUserProfile },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserProfile.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUserProfile.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.profile = action.payload;
      })
      .addCase(fetchUserProfile.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export const userActions = userSlice.actions;
export default userSlice.reducer;
