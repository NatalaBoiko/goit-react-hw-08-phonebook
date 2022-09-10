import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import authSelectors from '../../redux/auth/auth-selectors';

const PublicRoute = ({ children, restricted = false }) => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const shouldRedirect = isLoggedIn && restricted;
  return shouldRedirect ? <Navigate to="/contacts" replace /> : children;
};

export default PublicRoute;
