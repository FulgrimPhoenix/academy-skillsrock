import { Paper, styled } from '@mui/material';

export const UsersRoot = styled('div')({
  height: '100%',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: 20,
});

export const UsersHeader = styled('div')({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const UsersPaper = styled(Paper)({
  flexGrow: 1,
  height: '100%',
});
