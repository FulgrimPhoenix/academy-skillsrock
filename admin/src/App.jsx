import { ThemeProvider } from '@mui/material/styles';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import AppRoutes from './routes/AppRoutes';
import theme from './styles/theme';

import { checkAuth } from '~features/auth/authThunk';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <AppRoutes />
    </ThemeProvider>
  );
};

export default App;
