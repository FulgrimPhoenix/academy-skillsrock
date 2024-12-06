import { Navigate } from 'react-router-dom';

import useAuth from '../hooks/useAuth';

const ProtectedRoute = ({ component: Component }) => {
  const { isAuthenticated } = useAuth();
  // return isAuthenticated ? <Component /> : <Navigate to="/login" />;
  return <Component />;
};

export default ProtectedRoute;
