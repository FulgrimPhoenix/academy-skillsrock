import { Button, Paper } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { COLUMNS } from './Courses.const';

import { fetchCourses } from '~features/courses/coursesThunk';

export const Courses = () => {
  const dispatch = useDispatch();
  const { courses = [], status } = useSelector(state => state);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchCourses());
    }
  }, [status, dispatch]);

  const navigate = useNavigate();

  const createUpdateCourse = courseId => {
    let path = '/dashboard/add-course';
    if (courseId) path = `/dashboard/update-course/${courseId}`;
    navigate(path);
  };

  const paginationModel = { page: 0, pageSize: 5 };

  return (
    <div>
      <div className="coursesTitle">
        <h1>Courses List</h1>
        <Button
          onClick={() => {
            createUpdateCourse();
          }}
          variant="contained"
        >
          Create New Course
        </Button>
      </div>

      <Paper sx={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={courses}
          columns={COLUMNS}
          initialState={{ pagination: { paginationModel } }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
          sx={{ border: 0 }}
        />
      </Paper>
    </div>
  );
};
