import { styled } from '@mui/material';

export const LoginForm = styled('form')(({ theme }) => ({
  width: '400px',
  display: 'flex',
  flexDirection: 'column',
  gap: 15,
  padding: theme.spacing(3),
  boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.background.paper,
  [theme.breakpoints.up('sm')]: {
    maxWidth: '450px',
  },
}));

export const SignInContainer = styled('div')(({ theme }) => ({
  height: '100dvh',
  width: '100dwh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
}));
