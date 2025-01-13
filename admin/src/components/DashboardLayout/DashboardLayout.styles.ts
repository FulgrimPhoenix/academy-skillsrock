import { styled } from '@mui/material';

export const DashBoardLayoutWrapper = styled('div')((arg: { sidebarOpen: boolean }) => ({
  height: '100%',
  padding: '80px 24px 24px 24px',
  marginLeft: arg.sidebarOpen ? '240px' : '60px',
  transition: 'margin-left 0.3s ease',
  overflow: 'auto',
}));

export const DashboardLayoutRoot = styled('div')({
  height: '100dvh',
  width: '100%',
});
