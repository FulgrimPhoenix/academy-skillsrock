import { Paper, styled } from '@mui/material';

export const CoursesRoot = styled('div')({
  height: '100%',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: 20,
});

export const CoursesHeader = styled('div')({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const CoursesPaper = styled(Paper)({
  flexGrow: 1,
  height: '100%',
});
