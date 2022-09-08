import React from 'react';
import { ToastContainer } from 'react-toastify';
import { Route, Routes } from 'react-router-dom';
import { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
// import { PrivateRoute } from './Routs/PrivateRoute';
// import { PublicRoute } from './Routs/PublicRoute';
// import authSelectors from '../redux/auth/auth-selectors';
import authOperations from '../redux/auth/auth-operations';
import { Layout } from './Layout';

const HomeView = lazy(() => import('../views/Home'));
const Register = lazy(() => import('../views/Register'));
const Login = lazy(() => import('../views/Login'));
const Contacts = lazy(() => import('../views/Contacts'));

export const App = () => {
  const dispatch = useDispatch();
  // const isLoggedIn = useSelector(authSelectors.getIsloggedIn);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomeView />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />

          <Route path="/contacts" element={<Contacts />} />
        </Route>
      </Routes>
      <ToastContainer />
    </>
  );
};
