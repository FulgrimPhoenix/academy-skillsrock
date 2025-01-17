import { Navigate } from 'react-router-dom';

import useAuth from '../hooks/useAuth';
import { FC } from 'react';

const ProtectedRoute = ({ component: Component }: {component: FC}) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <Component /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
