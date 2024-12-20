import { createTheme, Theme } from '@mui/material/styles';

interface IthemeSet {
  primary: {
    main: '#1976d2';
  };
  secondary: {
    main: '#dc004e';
  };
}

const themeSet: IthemeSet = {
  primary: {
    main: '#1976d2',
  },
  secondary: {
    main: '#dc004e',
  },
};

const theme: Theme = createTheme({
  palette: themeSet,
});

export default theme;
