import { styled, Theme } from '@mui/material';
import MuiDrawer from '@mui/material/Drawer';

const DRAWER_WIDTH = 240;
const COLLAPSED_WIDTH = 60;

const openedMixin = (theme: Theme) => ({
  width: DRAWER_WIDTH,
  overflow: 'hidden',
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
});

const closedMixin = (theme: Theme) => ({
  overflow: 'hidden',
  width: COLLAPSED_WIDTH,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
});

export const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

export const SidebarDrawerRoot = styled(MuiDrawer, {
  shouldForwardProp: prop => prop !== 'open',
})<{ theme?: Theme; open: boolean; variant: string }>(({ theme, open }) => ({
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  position: 'fixed',
  top: 0,
  left: 0,
  bottom: 0,
  zIndex: 100,
  ...(open ? openedMixin(theme) : closedMixin(theme)),
  '& .MuiDrawer-paper': {
    ...(open ? openedMixin(theme) : closedMixin(theme)),
  },
}));
