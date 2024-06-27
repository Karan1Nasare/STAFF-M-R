/* eslint-disable import/no-cycle */
import React, { useState } from 'react';
import { Button, TextField, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import { object, string } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import useFetcher from '../../../../hooks/useFetcher';
import URLS from '../../../../constants/api';
import AuthButtonBg from '../../../../assets/auth/buttonBg.svg';
import { APIClient, APIClient2 } from '../../../../utilities/axios-client';
import { useStore } from '../../../../store/context-store';
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
        localStorage.setItem('user', JSON.stringify(response.data.data));
        console.log('Store updated:', response.data.data);
        navigate('/dashboard'); // Hardcoded for testing
        console.log('Navigating to /dashboard...');
      },
      onError: err => {
        setResponseErr(err?.response?.data?.message || err.message);
      },
    });
  };
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword(show => !show);
  const handleMouseDownPassword = e => {
    e.preventDefault();
  };
  return (
    <div className='text-white w-[40%] lg:ml-40'>
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
            <div className='bg-secondary__fill mt-2 rounded-md border border-gray-700 '>
              <TextField
                name='password'
                placeholder='Password (Required)'
                label=''
                className='underline-border w-full'
                variant='outlined'
                {...register('password')}
                id='standard-adornment-password'
                type={showPassword ? 'text' : 'password'}
                InputProps={{
                  endAdornment: (
                    <InputAdornment
                      position='end'
                      sx={{ border: 'none', marginRight: '0' }}
                    >
                      <IconButton
                        style={{ color: 'white' }}
                        aria-label='toggle password visibility'
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  ),
                  sx: {
                    '&.MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: 'transparent',
                      },
                      '&:hover fieldset': {
                        borderColor: 'transparent',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: 'transparent',
                      },
                      '& .MuiInputBase-input': {
                        border: 'none', // Specifically target the right border of the input
                      },
                    },
                  },
                }}
              />
            </div>
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
