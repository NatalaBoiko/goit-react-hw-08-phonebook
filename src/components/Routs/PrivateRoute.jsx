import { useSelector } from 'react-redux';
import { Route, Navigate } from 'react-router-dom';
import authSelectors from '../../redux/auth/auth-selectors';

export default function PrivateRoute({ children, ...routeProps }) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <Route {...routeProps}>
      {isLoggedIn ? children : <Navigate to="/" replace />}
    </Route>
  );
}

// import { useSelector } from 'react-redux';
// import { Navigate } from 'react-router-dom';

// import authSelectors from '../../redux/auth/auth-selectors';

// export const PrivateRoute = ({ children }) => {
//   const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

//   return isLoggedIn ? children : <Navigate to="/login" replace />;
// };

// export default PrivateRoute;
