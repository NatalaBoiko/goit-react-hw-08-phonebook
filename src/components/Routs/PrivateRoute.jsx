import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ isLoggedIn, redirectPath = '/', children }) => {
  if (!isLoggedIn) {
    return <Navigate to={redirectPath} replace />;
  }
  return children;
};
