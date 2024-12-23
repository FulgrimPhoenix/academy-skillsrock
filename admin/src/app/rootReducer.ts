import { combineReducers } from '@reduxjs/toolkit';

import { authSlice } from '~/features/auth/authSlice';
import { coursesSlice } from '~/features/courses/coursesSlice';
import { permissionSlice } from '~/features/permissions/permissionSlice';
import { permissionsSlice } from '~/features/permissions/permissionsSlice';
import { userSlice } from '~/features/users/userSlice';
import { usersSlice } from '~/features/users/usersSlice';

const rootReducer = combineReducers({
  [authSlice.name]: authSlice.reducer,
  [coursesSlice.name]: coursesSlice.reducer,
  [permissionsSlice.name]: permissionsSlice.reducer,
  [permissionSlice.name]: permissionSlice.reducer,
  [usersSlice.name]: usersSlice.reducer,
  [userSlice.name]: userSlice.reducer,
});

export default rootReducer;
