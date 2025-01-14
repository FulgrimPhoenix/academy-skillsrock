import { createSlice } from '@reduxjs/toolkit';

import { fetchPermissions } from './permissionsThunk';
import { Tpermission, TpermissionStatus } from '../../types/permissions.types';

type TinitialState = {
  permissions: Tpermission[];
  status: TpermissionStatus;
  error: null | string;
};

const initialState: TinitialState = {
  permissions: [],
  status: 'idle', // 'idle' | 'fetching' | 'fetched' | 'failed'
  error: null,
};

export const permissionsSlice = createSlice({
  name: 'permissions',
  initialState: initialState,
  reducers: {
    addOrUpdatePermission: (state, action) => {
      const permission = action.payload;
      if (state.permissions !== null) {
        const index = state.permissions.findIndex(({ _id }) => permission._id === _id);

        if (index !== -1) {
          // Update the existing permission
          state.permissions[index] = { ...state.permissions[index], ...permission };
        } else {
          // Add new permission
          state.permissions.push(permission);
        }
      }
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchPermissions.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchPermissions.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.permissions = action.payload;
      })
      .addCase(fetchPermissions.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Undefinded error';
      });
  },
});

export const { addOrUpdatePermission } = permissionsSlice.actions;
