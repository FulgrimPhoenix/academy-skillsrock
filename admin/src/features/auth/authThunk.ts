import { TAppDispatch } from '~/app/store';
import AuthService from './authService';
import { loginRequest, loginSuccess, loginFailure, logout } from './authSlice';

export interface Ilogin {
  username: string;
  password: string;
}

export const login = (credentials: Ilogin) => async (dispatch: TAppDispatch) => {
  dispatch(loginRequest());
  try {
    const user = await AuthService.login(credentials);
    dispatch(loginSuccess(user));
  } catch (error) {
    if (error instanceof Error) {
      dispatch(loginFailure(error.message));
    } else {
      dispatch(loginFailure('Something wrong'));
    }
  }
};

export const checkAuth = () => (dispatch: TAppDispatch)  => {
  const token = localStorage.getItem('token');
  if (token) {
    // Optionally verify token or fetch user data
    dispatch(loginSuccess(token));
  } else {
    dispatch(logout());
  }
};
