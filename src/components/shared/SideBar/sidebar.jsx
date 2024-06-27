/* eslint-disable import/no-cycle */
import React, { useCallback, startTransition } from 'react';
import { Icon } from '@iconify/react';
import { Typography } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import { getRouteByName } from '../../../App.routes';

const SuperAdminSideBar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const handleClick = useCallback(value => {
    startTransition(() => {
      console.log('notifications', value, getRouteByName(value.name));
      navigate(getRouteByName(value.name)?.route);
    });
  }, []);

  const isRouteActive = routeName => {
    const route = getRouteByName(routeName);
    if (route) {
      const isActive =
        location.pathname === route.route ||
        location.pathname.startsWith(`${route.route}/`);
      if (route.parent) {
        const parentRoute = getRouteByName(route.parent);
        if (parentRoute) {
          return (
            isActive || location.pathname.startsWith(`${parentRoute.route}/`)
          );
        }
      }
      return isActive;
    }
    return false;
  };

  const menuList = [
    {
      label: 'Dashboard',
      icon: 'ic:baseline-space-dashboard',
      name: 'dashboard',
      isActive: isRouteActive('dashboard'),
    },
    {
      label: 'Students',
      icon: 'hugeicons:message-multiple-01',
      name: 'student',
      isActive: isRouteActive('student'),
    },
    {
      label: 'Exam',
      icon: 'flowbite:user-settings-solid',
      name: 'questionBank',
      isActive: isRouteActive('questionBank'),
    },
    {
      label: 'Material',
      icon: 'mage:file-2-fill',
      name: 'material',
      isActive: isRouteActive('material'),
    },
    {
      label: 'Question Bank',
      icon: 'mage:file-2-fill',
      name: 'questionBank',
      isActive: isRouteActive('questionBank'),
    },
    {
      label: 'Notification',
      icon: 'mdi:announcement',
      name: 'notification',
      isActive: isRouteActive('notification'),
    },
  ];
  return (
    <div className='flex flex-col text-lg text-start text-white '>
      <div className='ml-8'>
        <Typography variant='sidebar_menu_h' className='uppercase'>
          Main Menu
        </Typography>
      </div>
      {menuList.map((value, index) => (
        <div
          key={index}
          className={`h-12 ml-4 p-4 items-start mt-4 w-full rounded-md  ${
            value.isActive
              ? 'bg-sidebar_active text-primary'
              : 'bg-secondary__fill hover:bg-sidebar_active hover:text-primary'
          }`}
          onClick={() => handleClick(value)}
        >
          <div className='flex items-center space-x-2'>
            <Icon icon={value.icon} />
            <Typography variant='h6'>{value.label}</Typography>
          </div>
        </div>
      ))}
    </div>
  );
};
export default SuperAdminSideBar;
