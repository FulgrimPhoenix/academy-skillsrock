import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IinitialState  {
    isAuthenticated: boolean;
    user: null;
    loading: boolean;
    error: string | null;
  };

  const initialState: IinitialState = {
    isAuthenticated: !!localStorage.getItem('token'),
    user: null,
    loading: false,
    error: null,
  }



export const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    loginRequest: state => {
      state.loading = true;
      state.error = null;
    },
    loginSuccess: (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    loginFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
    logout: state => {
      localStorage.removeItem('token');
      state.isAuthenticated = false;
      state.user = null;
    },
  },
});

export const { loginRequest, loginSuccess, loginFailure, logout } = authSlice.actions;
