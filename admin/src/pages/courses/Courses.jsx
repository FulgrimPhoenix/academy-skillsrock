import { Button, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { COLUMNS } from './Courses.const';
import { CoursesHeader, CoursesPaper, CoursesRoot } from './Courses.styles';

import { fetchCourses } from '~features/courses/coursesThunk';

export const Courses = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { courses = [], status } = useSelector(state => state);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchCourses());
    }
  }, [status, dispatch]);

  const createUpdateCourse = courseId => {
    let path = '/dashboard/add-course';
    if (courseId) path = `/dashboard/update-course/${courseId}`;
    navigate(path);
  };

  return (
    <CoursesRoot>
      <CoursesHeader className="coursesTitle">
        <Typography variant="h3">Courses List</Typography>
        <Button onClick={createUpdateCourse} variant="contained">
          Create New Course
        </Button>
      </CoursesHeader>

      <CoursesPaper>
        <DataGrid
          rows={courses}
          columns={COLUMNS}
          initialState={{ pagination: { page: 0, pageSize: 5 } }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
          sx={{ border: 0 }}
        />
      </CoursesPaper>
    </CoursesRoot>
  );
};
