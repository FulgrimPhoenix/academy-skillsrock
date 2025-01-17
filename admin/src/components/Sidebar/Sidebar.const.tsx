import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';

type TNAVIGATION_LIST = { segment: string; title: string; icon: JSX.Element };

export const DRAWER_WIDTH = 240;

export const NAVIGATION_LIST: TNAVIGATION_LIST[] = [
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
