import { Button, TextField, Typography } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import { object, string } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import AuthButtonBg from '../../../../assets/auth/buttonBg.svg';
import { useStore } from '../../../../store/context-store';
import useFetcher from '../../../../hooks/useFetcher';
import { getRouteByName } from '../../../../App.routes';
import URLS from '../../../../constants/api';
import axiosInstance from '../../../../utilities/axios-client';

const LoginForm = () => {
  const [, StoreDispatch] = useStore();
  const loginSchema = object({
    username: string()
      .required('username should not be empty')
      // .username()
      .typeError('Please enter a valid username address'),
    password: string().required('Password should not be empty'),
  });
  const {
    handleSubmit,
    formState: { errors, isSubmitting },
    register,
  } = useForm({ resolver: yupResolver(loginSchema) });
  const { fetcher, getExecutorState } = useFetcher();
  const { isLoading, error } = getExecutorState('login');
  const loginin = async data => {
    return axiosInstance.post(URLS.LOGIN, data);
  };
  const onLoginHandler = async data => {
    fetcher({
      key: 'login',
      executer: () => loginin(data),
      onSuccessRoute: getRouteByName('dashboard')?.route || '/',
      onSuccess: response => {
        StoreDispatch({ type: 'Login', user: response.data.data });
      },
    });
  };

  return (
    <div className='text-white w-[40%] lg:ml-64'>
      <form onSubmit={handleSubmit(onLoginHandler)}>
        <Typography variant='title' className='text-start block mb-10'>
          Login to Continue
        </Typography>
        <div className='text-start mt-6 mb-6'>
          <div className='lg:mb-6'>
            <TextField
              placeholder='UserName (Required)'
              label=''
              className='underline-border w-full'
              variant='standard'
              {...register('username')}
            />
          </div>
          <div>
            <TextField
              name='password'
              id='password'
              placeholder='Password (Required)'
              label=''
              className='underline-border w-full'
              variant='standard'
              {...register('password')}
            />
          </div>
        </div>
        <p>{errors?.username?.message}</p>
        <p>{errors?.password?.message}</p>
        <div className='authButton mt-10'>
          <img src={AuthButtonBg} alt='button' />
          <Button
            variant='outline-primary'
            type='submit'
            disabled={isLoading || isSubmitting}
          >
            Log In
          </Button>
        </div>
        {error && (
          <Typography variant='h6' sx={{ mt: 10 }}>
            {error?.message || ' Something went wrong'}
          </Typography>
        )}
      </form>
    </div>
  );
};

export default LoginForm;
