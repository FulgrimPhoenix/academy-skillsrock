import { Button, TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addPermission, fetchPermission, updatePermission } from '../../../features/permissions/permissionsThunk';

export const Permission = ({ permissionId, handleClose }) => {
  const dispatch = useDispatch();
  const { permission = {}, status, error } = useSelector(state => state.permission);

  const [formData, setFormData] = useState({
    name: '',
    description: '',
  });

  useEffect(() => {
    dispatch(fetchPermission(permissionId));
  }, []);

  useEffect(() => {
    if (permissionId && permission) {
      setFormData({
        name: permission.name || '',
        description: permission.description || '',
      });
    }
  }, [permissionId, permission]);

  useEffect(() => {
    if (status === 'succeeded') {
      handleClose(permission);
    }
  }, [status]);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = e => {
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
