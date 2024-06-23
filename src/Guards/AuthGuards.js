/* eslint-disable import/no-cycle */

import React, { useEffect, useState } from 'react';
import { Navigate, useOutlet } from 'react-router-dom';
import { useStore } from '../store/context-store';
import { getRouteByName } from '../App.routes';

const AuthGuard = ({ children, rObj }) => {
  const [Store, StoreDispatch] = useStore();
  const outlet = useOutlet();
  const [isValid, setValid] = useState(true);
  useEffect(() => {
    function onUnAuthorized() {
      StoreDispatch({ type: 'RemoveState' });
      setValid(false);
    }

    let isAlreadyLoggedIn = false;
    try {
      const userData = JSON.parse(localStorage.getItem('last_state'));
      if (userData?.user) {
        isAlreadyLoggedIn = true;
        StoreDispatch({ type: 'signIn', user: userData.user });
      }
    } catch (err) {
      console.log(err);
    }
    if (!Store?.user?.token && !isAlreadyLoggedIn) {
      onUnAuthorized();
    }
  }, [Store?.user?.setupFinished, Store?.user?.token, StoreDispatch]);

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
