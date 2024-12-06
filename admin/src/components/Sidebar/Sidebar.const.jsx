import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';

export const DRAWER_WIDTH = 240;

export const NAVIGATION_LIST = [
  {
    segment: '/dashboard/users',
    title: 'Users',
    icon: <PeopleAltOutlinedIcon />,
  },
  {
    segment: '/dashboard/courses',
    title: 'Courses',
    icon: <ListAltOutlinedIcon />,
  },
  {
    segment: '/dashboard/permissions',
    title: 'Permissions',
    icon: <ListAltOutlinedIcon />,
  },
];
