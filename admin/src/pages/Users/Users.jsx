import { Button, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { COLUMNS } from './Users.const';
import { UsersHeader, UsersPaper, UsersRoot } from './Users.styles';

import { fetchUsers } from '~features/users/usersThunk';

export const Users = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const getRowId = row => row._id;
  const { users = [], status } = useSelector(state => state.users);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchUsers());
    }
  }, [status, dispatch]);

  const createUpdateUser = userId => {
    let path = '/dashboard/add-user';
    if (userId) path = `/dashboard/update-user/${userId}`;
    navigate(path);
  };

  return (
    <UsersRoot>
      <UsersHeader>
        <Typography variant="h3">Users List</Typography>
        <Button size="medium" onClick={createUpdateUser} variant="contained">
          Create New User
        </Button>
      </UsersHeader>

      <UsersPaper>
        <DataGrid
          rows={users}
          columns={COLUMNS}
          getRowId={getRowId}
          initialState={{ pagination: { page: 0, pageSize: 5 } }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
        />
      </UsersPaper>
    </UsersRoot>
  );
};
