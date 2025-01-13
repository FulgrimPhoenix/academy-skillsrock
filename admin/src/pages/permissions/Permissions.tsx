import EditIcon from '@mui/icons-material/Edit';
import { Button, Paper, Typography, CircularProgress } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import { DataGrid, GridValidRowModel } from '@mui/x-data-grid';
import { useState, useEffect } from 'react';

import { PermissionsHeader, PermissionsPaper, PermissionsRoot } from './Permissions.styles';

import { resetState } from '~features/permissions/permissionSlice';
import { addOrUpdatePermission } from '~features/permissions/permissionsSlice';
import { fetchPermissions } from '~features/permissions/permissionsThunk';
import { Permission } from './Permission/Permission';
import { useAppDispatch, useAppSelector } from '~app/store';

export const Permissions = () => {
  const dispatch = useAppDispatch();
  const [open, setOpen] = useState(false);
  const [selectedPermissionId, setSelectedPermissionId] = useState(null);
  const {
    permissions = [],
    status,
    error,
  } = useAppSelector(state => {
    return state.permissions;
  });

  const columns = [
    { field: 'name', headerName: 'Title', width: 300 },
    { field: 'description', headerName: 'Description', flex: 1, minWidth: 500 },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 150,
      sortable: false,
      renderCell: (params: GridValidRowModel) => (
        <>
          <IconButton color="primary" onClick={() => handleRowClick(params.row._id)}>
            <EditIcon />
          </IconButton>
        </>
      ),
    },
  ];

  const handleClose = (permission?: { _id: string; name: string; description: string }) => {
    setOpen(false);
    dispatch(resetState());
    if (permission) {
      dispatch(addOrUpdatePermission(permission));
    }
  };

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchPermissions());
    }
  }, [status, dispatch]);

  const getRowId = (row: GridValidRowModel) => {
    return row._id;
  };
  // тут так же в функцию автоматически поступает не айди, а объект события
  const handleRowClick = (permissionId: any) => {
    setSelectedPermissionId(permissionId);
    setOpen(true);
  };

  return (
    <PermissionsRoot>
      <PermissionsHeader>
        <Typography variant="h3">Permissions List</Typography>
        <Button onClick={handleRowClick} variant="contained">
          Create New Permission
        </Button>
      </PermissionsHeader>
      <PermissionsPaper>
        <DataGrid
          loading={status === 'loading'}
          initialState={{
            pagination: {
              paginationModel: { pageSize: 10, page: 0 },
            },
          }}
          getRowId={getRowId}
          rows={permissions}
          columns={columns}
        />
      </PermissionsPaper>
      {open && (
        <Dialog
          open={open}
          onClose={() => {
            handleClose();
          }}
        >
          <DialogTitle>Permission Details</DialogTitle>
          <DialogContent>
            <Permission permissionId={selectedPermissionId} handleClose={handleClose} />
          </DialogContent>
          <DialogActions>
            <Button
              onClick={() => {
                handleClose();
              }}
              color="primary"
            >
              Close
            </Button>
          </DialogActions>
        </Dialog>
      )}
      {error && <Typography color="error">{error}</Typography>}
    </PermissionsRoot>
  );
};
