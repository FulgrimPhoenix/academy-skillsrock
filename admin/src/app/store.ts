import { configureStore } from '@reduxjs/toolkit';

import rootReducer from './rootReducer';

export const store = configureStore({
  reducer: rootReducer,
});

export type TAppStore = ReturnType<typeof rootReducer>;
export type TAppDispatch = typeof store.dispatch;
