import { Button, Paper } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { COLUMNS } from './Users.const';
import { fetchUsers } from '../../features/users/usersThunk';

export const Users = () => {
  const dispatch = useDispatch();
  const { users = [], status } = useSelector(state => state.users);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchUsers());
    }
  }, [status, dispatch]);

  const navigate = useNavigate();

  const createUpdateUser = userId => {
    let path = '/dashboard/add-user';
    if (userId) path = `/dashboard/update-user/${userId}`;
    navigate(path);
  };

  const paginationModel = { page: 0, pageSize: 5 };

  const getRowId = row => {
    return row._id;
  };
  return (
    <div>
      <div className="usersTitle">
        <h1>Users List</h1>
        <Button
          onClick={() => {
            createUpdateUser();
          }}
          variant="contained"
        >
          Create New User
        </Button>
      </div>

      <Paper sx={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={users}
          columns={COLUMNS}
          getRowId={getRowId}
          initialState={{ pagination: { paginationModel } }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
          sx={{ border: 0 }}
        />
      </Paper>
    </div>
  );
};
