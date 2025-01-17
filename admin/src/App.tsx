import { ThemeProvider } from '@mui/material/styles';
import { useEffect } from 'react';

import AppRoutes from './routes/AppRoutes';
import theme from './styles/theme';

import { checkAuth } from '~features/auth/authThunk';
import { useAppDispatch } from '~app/store';

const App = () => {
  const dispatch = useAppDispatch();

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
