import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from './AuthProvider';

const ProtectedRoute = () => {
  const { user } = useAuth();

  return user? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoute;
