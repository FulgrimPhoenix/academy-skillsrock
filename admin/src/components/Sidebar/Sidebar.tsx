import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { List, ListItem, ListItemIcon, ListItemText, Divider, IconButton, ListItemButton } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

import { NAVIGATION_LIST } from './Sidebar.const';
import { DrawerHeader, SidebarDrawerRoot } from './Sidebar.styles';
import React, { Dispatch, SetStateAction } from 'react';

interface ISidebar {
  setSidebarOpen: (arg: boolean) => void;
  sidebarOpen: boolean;
}

export const Sidebar = ({ setSidebarOpen, sidebarOpen }: ISidebar) => {
  const theme = useTheme();
  const navigate = useNavigate();

  const handleDrawerClose = () => {
    setSidebarOpen(false);
  };

  return (
    <SidebarDrawerRoot variant="permanent" open={sidebarOpen}>
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
        </IconButton>
      </DrawerHeader>
      <Divider />
      <List>
        {NAVIGATION_LIST.map(nav => (
          <ListItem
            key={nav.title}
            disablePadding
            sx={{ display: 'block' }}
            onClick={() => {
              navigate(nav.segment);
            }}
          >
            <ListItemButton sx={{ minHeight: 48, px: 2.5 }}>
              <ListItemIcon sx={{ minWidth: 0, justifyContent: 'center' }}>{nav.icon}</ListItemIcon>
              <ListItemText
                primary={nav.title}
                sx={{ opacity: sidebarOpen ? 1 : 0, paddingLeft: sidebarOpen ? 2 : 0 }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </SidebarDrawerRoot>
  );
};
