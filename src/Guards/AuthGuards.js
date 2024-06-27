/* eslint-disable import/no-cycle */

import React, { useEffect, useState } from 'react';
import { Navigate, useOutlet } from 'react-router-dom';
import { useStore, useDispatch } from '../store/context-store';
import { getRouteByName } from '../App.routes';

const AuthGuard = ({ children }) => {
  const [Store] = useStore();
  const StoreDispatch = useDispatch();
  const outlet = useOutlet();
  const [isValid, setValid] = useState(true);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    console.log('Stored User:', storedUser);
    if (!storedUser || !storedUser.token) {
      StoreDispatch({ type: 'RemoveState' });
      setValid(false);
    } else {
      StoreDispatch({ type: 'Login', user: storedUser });
    }
  }, [StoreDispatch]);

  return isValid ? (
    <>{outlet}</>
  ) : (
    <Navigate
      state={{ redirectToUrl: window.location.href }}
      to={getRouteByName('Login').route}
    />
  );
};

export default AuthGuard;
