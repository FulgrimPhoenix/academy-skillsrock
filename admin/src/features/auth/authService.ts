import apiClient from '~utils/apiClient';
import { Ilogin } from './authThunk';

const AuthService = {
  login: async (credentials: Ilogin) => {
    const response = await apiClient.post('/auth/login', credentials);
    if (response.status === 200) {
      localStorage.setItem('token', response.data.token);
      return response.data.user;
    }
    throw new Error('Login failed');
  },
};

export default AuthService;
