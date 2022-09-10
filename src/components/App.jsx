import React from 'react';
import { ToastContainer } from 'react-toastify';
import { Route, Routes } from 'react-router-dom';
import { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from '../redux/auth/auth-operations';
// import PrivateRoute from './Routs/PrivateRoute';
// import { PublicRoute } from './Routs/PublicRoute';

import { Layout } from './Layout';

const HomeView = lazy(() => import('../views/Home'));
const Register = lazy(() => import('../views/Register'));
const Login = lazy(() => import('../views/Login'));
const Contacts = lazy(() => import('../views/Contacts'));
const NotFound = lazy(() => import('../views/NotFound'));

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              // <PublicRoute>
              <HomeView />
              // </PublicRoute>
            }
          />

          <Route
            path="/register"
            element={
              // <PublicRoute restricted>
              <Register />
              // </PublicRoute>
            }
          />

          <Route
            path="/login"
            element={
              // <PublicRoute restricted>
              <Login />
              // </PublicRoute>
            }
          />

          {/* <PrivateRoute path="/contacts">
            <Contacts />
          </PrivateRoute> */}

          <Route
            path="/contacts"
            element={
              // <PrivateRoute>
              <Contacts />
              // </PrivateRoute>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      <ToastContainer />
    </>
  );
};
