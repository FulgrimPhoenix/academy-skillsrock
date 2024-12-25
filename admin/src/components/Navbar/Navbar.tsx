import MenuIcon from '@mui/icons-material/Menu';
import { Toolbar, Typography, Button } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import { useDispatch } from 'react-redux';

import { NavbarRoot } from './Navbar.styles';

import { logout } from '~features/auth/authSlice';
import { Dispatch, FormEvent, SetStateAction } from 'react';

interface INavbarArgs {
  setSidebarOpen: Dispatch<SetStateAction<boolean>>;
  sidebarOpen: boolean;
}

export const Navbar = ({ setSidebarOpen, sidebarOpen }: INavbarArgs) => {
  const dispatch = useDispatch();

  const handleLogout = (e: FormEvent) => {
    e.preventDefault();
    dispatch(logout());
  };

  const handleDrawerOpen = () => {
    setSidebarOpen(prev => !prev);
  };

  return (
    <NavbarRoot position="fixed" open={sidebarOpen}>
      <Toolbar sx={{ flexGrow: 1 }}>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={{
            marginRight: 5,
            ...(sidebarOpen && { display: 'none' }),
          }}
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
