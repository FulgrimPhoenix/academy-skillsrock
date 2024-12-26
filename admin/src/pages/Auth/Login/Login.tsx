import { TextField, Button, Typography, FormControl, FormLabel, Link, FormControlLabel, Checkbox } from '@mui/material';
import Box from '@mui/material/Box';
import { FormEvent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { LoginForm, SignInContainer } from './Login.styles';
import { ForgotPassword } from '../ForgotPassword';

import { login } from '~features/auth/authThunk';
import { TAppDispatch, TAppState } from '~app/store';

export const Login = () => {
  // const [credentials, setCredentials] = useState({ username: '', password: '' });
  const dispatch = useDispatch<TAppDispatch>();
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector((state: TAppState): { isAuthenticated: boolean } => state.auth);

  const [emailError, setEmailError] = useState<boolean>(false);
  const [emailErrorMessage, setEmailErrorMessage] = useState<string>('');
  const [passwordError, setPasswordError] = useState<boolean>(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = useState<string>('');
  const [open, setOpen] = useState<boolean>(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (event: FormEvent): void => {
    event.preventDefault();
    const data = new FormData(event.currentTarget as HTMLFormElement);
    if (data.get('email') && data.get('password')) {
      dispatch(
        login({
          username: data.get('email') as string,
          password: data.get('password') as string,
        }),
      );
    } else {
      console.error(
        'Not valid type of data.',
        'Email type:',
        typeof data.get('email'),
        ' Password type:',
        typeof data.get('password'),
      );
    }
  };

  const validateInputs = () => {
    const email = document.getElementById('email') as HTMLInputElement;

    let isValid = true;

    if (!email.value || !/\S+@\S+\.\S+/.test(email.value)) {
      setEmailError(true);
      setEmailErrorMessage('Please enter a valid email address.');
      isValid = false;
    }

    return isValid;
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/dashboard');
    }
  }, [isAuthenticated, navigate]);

  return (
    <SignInContainer>
      <LoginForm onSubmit={handleSubmit} noValidate>
        <Typography variant="h4" sx={{ textAlign: 'center' }}>
          Sign in
        </Typography>
        <FormControl>
          <FormLabel htmlFor="email">Email</FormLabel>
          <TextField
            error={emailError}
            helperText={emailErrorMessage}
            id="email"
            type="email"
            name="email"
            placeholder="your@email.com"
            autoComplete="email"
            autoFocus
            required
            fullWidth
            variant="outlined"
            color={emailError ? 'error' : 'primary'}
            sx={{ ariaLabel: 'email' }}
          />
        </FormControl>
        <FormControl>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <FormLabel htmlFor="password">Password</FormLabel>
            <Link component="button" onClick={handleClickOpen} variant="body2" sx={{ alignSelf: 'baseline' }}>
              Forgot your password?
            </Link>
          </Box>
          <TextField
            error={passwordError}
            helperText={passwordErrorMessage}
            name="password"
            placeholder="••••••"
            type="password"
            id="password"
            autoComplete="current-password"
            autoFocus
            required
            fullWidth
            variant="outlined"
            color={passwordError ? 'error' : 'primary'}
          />
        </FormControl>
        <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Remember me" />
        <ForgotPassword open={open} handleClose={handleClose} />
        <Button type="submit" fullWidth variant="contained" onClick={validateInputs}>
          Sign in
        </Button>
      </LoginForm>
    </SignInContainer>
  );
};
