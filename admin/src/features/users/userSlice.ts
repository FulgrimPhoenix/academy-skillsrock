import { createSlice } from '@reduxjs/toolkit';

import { addUser, deleteUser, fetchUser, updateUser } from './usersThunk';
import { IUser, TuserStatus } from '~types/User.types';

interface IinitialState {
  user: null | IUser;
  status: TuserStatus;
  error: null | string;
}

const initialState: IinitialState = {
  user: null,
  status: 'idle', // 'idle' | 'fetching' | 'fetched' | 'failed'
  error: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    resetState: () => initialState,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchUser.pending, state => {
        state.status = 'fetching';
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.status = 'fetched';
        state.user = action.payload;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Undefinded error';
      })
      .addCase(addUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.status = 'succeeded';
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
      });
  },
});

export const { resetState } = userSlice.actions;
