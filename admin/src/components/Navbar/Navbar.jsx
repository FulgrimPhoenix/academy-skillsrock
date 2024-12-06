import MenuIcon from '@mui/icons-material/Menu';
import { Toolbar, Typography, Button } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import { useDispatch, useSelector } from 'react-redux';

import { NavbarRoot } from './Navbar.styles';

import { logout } from '~features/auth/authSlice';
import { toggleSidebar } from '~features/dashboard/dashboardSlice';

export const Navbar = () => {
  const dispatch = useDispatch();
  const { sidebarOpen } = useSelector(state => state.dashboard);

  const handleLogout = e => {
    e.preventDefault();
    dispatch(logout());
  };

  const handleDrawerOpen = () => {
    dispatch(toggleSidebar(sidebarOpen));
  };

  return (
    <NavbarRoot position="fixed" open={sidebarOpen}>
      <Toolbar sx={{ flexGrow: 1 }}>
        <IconButton
          color="inherit"
          A
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={[
            {
              marginRight: 5,
            },
            sidebarOpen && { display: 'none' },
          ]}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
          Manage Courses and Users
        </Typography>
        <Button color="inherit" onClick={handleLogout}>
          Logout
        </Button>
      </Toolbar>
    </NavbarRoot>
  );
};
