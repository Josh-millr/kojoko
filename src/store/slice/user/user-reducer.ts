import { createSlice } from '@reduxjs/toolkit';

import type { UserState } from './_type';
import * as actions from './user-actions';

const initialState = {} satisfies UserState;

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: { ...actions },
});

export const userActions = userSlice.actions;
export default userSlice.reducer;
