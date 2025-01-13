import { configureStore, createSelector } from '@reduxjs/toolkit';

import rootReducer from './rootReducer';
import { useDispatch, useSelector, useStore } from 'react-redux';

export const store = configureStore({
  reducer: rootReducer,
});

type TAppState = ReturnType<typeof store.getState>;
type TAppDispatch = typeof store.dispatch;
// не смог разобраться зачем нам эта конструкция. Для получения типов этих функций?
export const useAppSelector = useSelector.withTypes<TAppState>();
export const useAppDispatch = useDispatch.withTypes<TAppDispatch>();
export const useAppStore = useStore.withTypes<typeof store>();
export const createAppSelector = createSelector.withTypes<TAppState>();
