import { CSSObject } from '@emotion/react';
import { Paper, styled } from '@mui/material';

const UserRootStyle: CSSObject = {
  height: '100%',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: 20,
};

const UsersHeaderStyle: CSSObject = {
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

const UsersPaperStyle: CSSObject = {
  flexGrow: 1,
  height: '100%',
};

export const UsersRoot = styled('div')(UserRootStyle);

export const UsersHeader = styled('div')(UsersHeaderStyle);

export const UsersPaper = styled(Paper)(UsersPaperStyle);
