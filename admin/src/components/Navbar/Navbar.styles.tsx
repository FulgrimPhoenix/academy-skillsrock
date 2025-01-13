import { styled } from '@mui/material';
import MuiAppBar, { AppBarProps } from '@mui/material/AppBar';

const DRAWER_WIDTH = 240;

interface INavbarRoot extends AppBarProps {
  open?: boolean;
}

export const NavbarRoot = styled(MuiAppBar, {
  shouldForwardProp: prop => prop !== 'open',
})<INavbarRoot>(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  variants: [
    {
      props: ({ open }) => open,
      style: {
        width: `calc(100% - ${DRAWER_WIDTH}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
    },
  ],
}));
