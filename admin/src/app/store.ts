import { configureStore, createSelector } from '@reduxjs/toolkit';

import rootReducer from './rootReducer';
import { useDispatch, useSelector, useStore } from 'react-redux';

export const store = configureStore({
  reducer: rootReducer,
});

export type TAppState = ReturnType<typeof store.getState>;
export type TAppDispatch = typeof store.dispatch;
// не смог разобраться зачем нам эта конструкция. Для получения типов этих функций?
export const useAppSelector = useSelector.withTypes<TAppState>();
export const useAppDispath = useDispatch.withTypes<TAppDispatch>();
export const useAppStore = useStore.withTypes<typeof store>();
export const createAppSelector = createSelector.withTypes<TAppState>();
