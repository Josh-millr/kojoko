import { configureStore } from '@reduxjs/toolkit';

import user from './slice/user/user-reducer';

const store = configureStore({
  reducer: { user },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
