import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import authSelectors from '../../redux/auth/auth-selectors';

const PrivateRoute = ({ children }) => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return isLoggedIn ? children : <Navigate to="/" replace />;
};

export default PrivateRoute;
