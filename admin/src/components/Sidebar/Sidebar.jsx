import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ListItemButton from '@mui/material/ListItemButton';
import { useTheme } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { NAVIGATION_LIST } from './Sidebar.const';
import { DrawerHeader, SidebarDrawerRoot } from './Sidebar.styles';

import { toggleSidebar } from '~features/dashboard/dashboardSlice';

export const Sidebar = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { sidebarOpen } = useSelector(state => state.dashboard);

  const handleDrawerClose = () => {
    dispatch(toggleSidebar(false));
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
            <ListItemButton
              sx={[
                {
                  minHeight: 48,
                  px: 2.5,
                },
                sidebarOpen
                  ? {
                      justifyContent: 'initial',
                    }
                  : {
                      justifyContent: 'center',
                    },
              ]}
            >
              <ListItemIcon
                sx={[
                  {
                    minWidth: 0,
                    justifyContent: 'center',
                  },
                  sidebarOpen
                    ? {
                        mr: 3,
                      }
                    : {
                        mr: 'auto',
                      },
                ]}
              >
                {nav.icon}
              </ListItemIcon>
              <ListItemText
                primary={nav.title}
                sx={[
                  sidebarOpen
                    ? {
                        opacity: 1,
                      }
                    : {
                        opacity: 0,
                      },
                ]}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </SidebarDrawerRoot>
  );
};
