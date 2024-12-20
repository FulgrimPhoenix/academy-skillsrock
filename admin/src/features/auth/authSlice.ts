import { createSlice } from '@reduxjs/toolkit';

interface IauthSlice {
  name: string;
  initialState: {
    isAuthenticated: string;
    user: null;
    loading: false;
    error: null;
  };
  reducers: {
    loginRequest: (state: any) => void;
    loginSuccess: (state: any, action: any) => void;
    loginFailure: (state: any, action: string) => void;
    logout: (state: any) => void;
  };
}

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: !!localStorage.getItem('token'),
    user: null,
    loading: false,
    error: null,
  },
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
    loginFailure: (state, action) => {
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
