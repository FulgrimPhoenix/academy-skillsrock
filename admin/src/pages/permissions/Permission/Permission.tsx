import { Button, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addPermission, fetchPermission, updatePermission } from '../../../features/permissions/permissionsThunk';
import { TAppDispatch, TAppState } from '~app/store';

interface IPermissionArgs {
  permissionId: string | null;
  handleClose: (arg: { _id: string; name: string; description: string }) => void;
}

interface IformData {
  _id: string;
  name: string;
  description: string;
}

export const Permission = ({ permissionId, handleClose }: IPermissionArgs) => {
  const dispatch = useDispatch<TAppDispatch>();
  const { permission, status, error } = useSelector((state: TAppState) => state.permission);

  const [formData, setFormData] = useState<IformData>({
    _id: '',
    name: '',
    description: '',
  });

  useEffect(() => {
    if (permissionId !== null) {
      dispatch(fetchPermission(permissionId));
    }
  }, []);

  useEffect(() => {
    if (permissionId && permission) {
      setFormData({
        _id: permission._id || '',
        name: permission.name || '',
        description: permission.description || '',
      });
    }
  }, [permissionId, permission]);

  useEffect(() => {
    if (status === 'succeeded') {
      if (permission !== null) {
        handleClose(permission);
      }
    }
  }, [status]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (permissionId) {
      dispatch(updatePermission({ permissionId, updatedPermission: formData }));
    } else {
      dispatch(addPermission(formData));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Permission Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        fullWidth
        required
        margin="normal"
      />
      <TextField
        label="Description"
        name="description"
        value={formData.description}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <Button type="submit" variant="contained" color="primary" fullWidth sx={{ marginTop: 2 }}>
        {permissionId ? 'Update' : 'Add'} Permission
      </Button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
  );
};
