import React from 'react';

import { Route, Routes } from 'react-router-dom';

import { lazy } from 'react';
import { Layout } from './Layout';

const HomeView = lazy(() => import('../views/Home'));
const Register = lazy(() => import('../views/Register'));
const Login = lazy(() => import('../views/Login'));
const Contacts = lazy(() => import('../views/Contacts'));

export const App = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<HomeView />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/contacts" element={<Contacts />} />
    </Route>
  </Routes>
);
