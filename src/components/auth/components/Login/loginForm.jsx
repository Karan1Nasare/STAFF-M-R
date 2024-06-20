/* eslint-disable import/no-cycle */
import React, { useState } from 'react';
import { Button, TextField, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import { object, string } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import AuthButtonBg from '../../../../assets/auth/buttonBg.svg';
import { APIClient, APIClient2 } from '../../../../utilities/axios-client';
import { useStore } from '../../../../store/context-store';
import useFetcher from '../../../../hooks/useFetcher';
import URLS from '../../../../constants/api';
import { getRouteByName } from '../../../../App.routes';

const LoginForm = () => {
  const { API } = APIClient();
  const { axiosInstance } = APIClient2();
  const [Store, StoreDispatch] = useStore();
  const [responseErr, setResponseErr] = useState('');
  const navigate = useNavigate();

  const loginSchema = object({
    username: string()
      .required('Username should not be empty')
      .typeError('Please enter a valid username'),
    password: string().required('Password should not be empty'),
  });

  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm({ resolver: yupResolver(loginSchema) });

  const { fetcher, getExecutorState } = useFetcher();
  const { isLoading } = getExecutorState('login');

  const loginin = async data => {
    return axiosInstance.post(URLS.LOGIN, data);
  };

  const onLoginHandler = async data => {
    fetcher({
      key: 'login',
      executer: () => loginin(data),
      onSuccessRoute: getRouteByName('dashboard')?.route || '/',
      onSuccess: response => {
        console.log('🚀 ~ onLoginHandler ~ response:', response);
        StoreDispatch({ type: 'Login', user: response.data.data });
        navigate(getRouteByName('dashboard')?.route || '/');
      },
      onError: err => {
        setResponseErr(err?.response?.data?.message || err.message);
      },
    });
  };

  return (
    <div className='text-white w-[40%] lg:ml-64'>
      <form onSubmit={handleSubmit(onLoginHandler)}>
        <Typography variant='h4' className='text-start block mb-10'>
          Login to Continue
        </Typography>
        <div className='text-start mt-6 mb-6'>
          <div className='lg:mb-6'>
            <TextField
              placeholder='Username (Required)'
              className='underline-border w-full'
              variant='standard'
              {...register('username')}
            />
            <p>{errors?.username?.message}</p>
          </div>
          <div>
            <TextField
              placeholder='Password (Required)'
              className='underline-border w-full'
              variant='standard'
              type='password'
              {...register('password')}
            />
            <p>{errors?.password?.message}</p>
          </div>
        </div>
        <div className='authButton mt-10'>
          <img src={AuthButtonBg} alt='button' />
          <Button variant='outline-primary' type='submit' disabled={isLoading}>
            Log In
          </Button>
        </div>
        {responseErr && (
          <Typography variant='h6' sx={{ mt: 10 }}>
            {responseErr}
          </Typography>
        )}
      </form>
    </div>
  );
};

export default LoginForm;
