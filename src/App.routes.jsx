/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable import/no-cycle */

import React, { lazy, useEffect } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { useStore } from './store/context-store';
import AuthGuard from './Guards/AuthGuards';

import AddCourse from './components/Course/Course'; // eslint-disable-next-line import/no-named-as-default-member
import LanguagePage from './components/Language';
// import AddSuperAdminNotification from './pages/superAdminNotification/addSuperAdminNotification';

const AdminsPage = lazy(() => import('./pages/Admins/AdminsPage'));
const AddAdminsPage = lazy(() => import('./pages/Admins/AddAdminsPage'));
const Banner = lazy(() => import('./components/banner'));
const AddBanner = lazy(() => import('./components/banner/addBanner'));
const Student = lazy(() => import('./components/student/index'));
const StudentAttendance = lazy(
  () => import('./components/student/components/studentAttendance'),
);
const Profile = lazy(() => import('./components/Profile/index'));

const BlankAddQuestions = lazy(
  () => import('./components/questionBank/blankAddQuestions'),
);

const LogIn = lazy(() => import('./components/auth/components/Login'));
const Otp = lazy(() => import('./components/auth/components/Otp'));
const ForgotPassword = lazy(
  () => import('./components/auth/components/ForgotPassword'),
);
const ChangePassword = lazy(
  () => import('./components/auth/components/ChangePassword'),
);

const LayoutWrapper = lazy(() => import('./components/LayoutWrapper'));

const Dashboard = lazy(() => import('./components/dashboard'));

const QuestionBank = lazy(() => import('./components/questionBank'));
const AddQuestions = lazy(
  () => import('./components/questionBank/addQuestionTab'),
);
const Review = lazy(() => import('./components/questionBank/review'));

const FeaturePage = lazy(() => import('./pages/FeaturePage'));
const AddFeature = lazy(() => import('./pages/AddFeaturePage'));

const PlanPage = lazy(() => import('./pages/Plan'));
const ManagePlanPage = lazy(() => import('./pages/ManagePlan'));

const Material = lazy(() => import('./pages/Material/MaterialPage'));
const AddContent = lazy(
  () => import('./components/MaterialContent/TabContainer'),
);

const Notifications = lazy(() => import('./pages/NotificationPage'));
const AddNotification = lazy(() => import('./pages/AddNotificationPage'));

const Payment = lazy(() => import('./pages/Payment'));

const AppRoutes = [
  // Auth Route

  {
    name: 'Login',
    slug: 'LOG-IN',
    route: '/login',
    component: LogIn,
    icon: '',
    external: false,
    auth: false,
    parent: '/',
  },
  // {
  //   name: 'Otp',
  //   slug: 'OTP',
  //   route: '/otp',
  //   component: Otp,
  //   icon: '',
  //   external: false,
  //   auth: false,
  //   parent: '/',
  // },
  {
    name: 'forgot-password',
    slug: 'FORGOT-PASSWORD',
    route: '/forgot-password',
    component: ForgotPassword,
    icon: '',
    external: false,
    auth: false,
    parent: '/',
  },

  // Change Password

  {
    name: 'change-password',
    slug: 'CHANGE-PASSWORD',
    route: '/change-password',
    component: ChangePassword,
    icon: '',
    external: false,
    auth: false,
    parent: '/',
  },
  {
    name: 'AddContent',
    slug: 'add-content',
    route: `/material/addContent`,
    component: AddContent,
    menu_location: '',
    icon: '',
    external: false,
    auth: true,
    wrapper: LayoutWrapper,
  },

  // Dashboard Route
  {
    name: 'dashboard',
    slug: 'dashboard',
    route: '/',
    component: Dashboard,
    icon: '',
    external: false,
    auth: true,
    wrapper: LayoutWrapper,
    parent: 'dashboard',
  },

  // This screen is for Master Admin
  {
    name: 'banner',
    slug: 'banner',
    route: '/banner',
    component: Banner,
    icon: '',
    external: false,
    auth: true,
    wrapper: LayoutWrapper,
    parent: 'banner',
  },
  {
    name: 'addBanner',
    slug: 'addBanner',
    route: '/addBanner',
    component: AddBanner,
    icon: '',
    external: false,
    auth: true,
    wrapper: LayoutWrapper,
    parent: 'banner',
  },
  {
    name: 'student',
    slug: 'student',
    route: '/student',
    component: Student,
    icon: '',
    external: false,
    auth: true,
    wrapper: LayoutWrapper,
    parent: 'student',
  },
  {
    name: 'studentAttendance',
    slug: 'studentAttendance',
    route: '/studentAttendance',
    component: StudentAttendance,
    icon: '',
    external: false,
    auth: true,
    wrapper: LayoutWrapper,
    parent: 'student',
  },
  {
    name: 'profile',
    slug: 'profile',
    route: '/profile',
    component: Profile,
    icon: '',
    external: false,
    auth: true,
    wrapper: LayoutWrapper,
    parent: 'student',
  },
  {
    name: 'addBanner',
    slug: 'addBanner',
    route: `/addBanner`,
    component: AddBanner,
    menu_location: '',
    icon: '',
    external: false,
    auth: true,
    wrapper: LayoutWrapper,
  },
  {
    name: 'addBanner',
    slug: 'addBanner',
    route: `/addBanner`,
    component: AddBanner,
    menu_location: '',
    icon: '',
    external: false,
    auth: true,
    wrapper: LayoutWrapper,
  },

  // Feature Route

  {
    name: 'features',
    slug: 'features',
    route: '/features',
    component: FeaturePage,
    icon: '',
    external: false,
    auth: true,
    wrapper: LayoutWrapper,
    parent: 'features',
  },
  {
    name: 'addFeature',
    slug: 'addFeature',
    route: '/addFeature',
    component: AddFeature,
    icon: '',
    external: false,
    auth: true,
    wrapper: LayoutWrapper,
    parent: 'addFeatures',
  },

  // Question Bank Route
  {
    name: 'questionBank',
    slug: 'questionBank',
    route: `/questionBank`,
    component: QuestionBank,
    menu_location: '',
    icon: '',
    external: false,
    auth: true,
    wrapper: LayoutWrapper,
  },
  {
    name: 'addQuestions',
    slug: 'addQuestions',
    route: `/addQuestions`,
    component: AddQuestions,
    menu_location: '',
    icon: '',
    external: false,
    auth: true,
    wrapper: LayoutWrapper,
  },
  {
    name: 'review',
    slug: 'review',
    route: `/review`,
    component: Review,
    menu_location: '',
    icon: '',
    external: false,
    auth: true,
    wrapper: LayoutWrapper,
  },

  // Material Route
  {
    name: 'material',
    slug: 'material',
    route: `/material`,
    component: Material,
    menu_location: '',
    icon: '',
    external: false,
    auth: true,
    wrapper: LayoutWrapper,
  },
  {
    name: 'material',
    slug: 'material',
    route: `/material/addCourse`,
    component: AddCourse,
    menu_location: '',
    icon: '',
    external: false,
    auth: true,
    wrapper: LayoutWrapper,
  },
  // Dashboard Route
  {
    name: 'mateiral',
    slug: 'language',
    route: '/language',
    component: LanguagePage,
    icon: '',
    external: false,
    auth: true,
    wrapper: LayoutWrapper,
    parent: 'dashboard',
  },

  // Plan Route
  {
    name: 'plan',
    slug: 'plan',
    route: `/plan`,
    component: PlanPage,
    menu_location: '',
    icon: '',
    external: false,
    auth: true,
    wrapper: LayoutWrapper,
  },
  {
    name: 'addPlan',
    slug: 'addPlan',
    route: `/addPlan`,
    component: ManagePlanPage,
    menu_location: '',
    icon: '',
    external: false,
    auth: true,
    wrapper: LayoutWrapper,
  },

  // Payment Route
  {
    name: 'payment',
    slug: 'payment',
    route: `/payment`,
    component: Payment,
    menu_location: '',
    icon: '',
    external: false,
    auth: true,
    wrapper: LayoutWrapper,
  },

  // Notification Route
  {
    name: 'notification',
    slug: 'notification',
    route: `/notification`,
    component: Notifications,
    menu_location: '',
    icon: '',
    external: false,
    auth: true,
    wrapper: LayoutWrapper,
  },
  {
    name: 'addNotification',
    slug: 'addNotification',
    route: '/addNotification',
    component: AddNotification,
    menu_location: '',
    icon: '',
    external: false,
    auth: false,
    wrapper: LayoutWrapper,
  },
  {
    name: 'admins',
    slug: 'Admins',
    route: `/admins`,
    component: AdminsPage,
    menu_location: '',
    icon: '',
    external: false,
    auth: false,
    wrapper: LayoutWrapper,
  },
  {
    name: 'Admin-Add',
    slug: 'Admins-Add',
    route: `/admin/add-admin`,
    component: AddAdminsPage,
    menu_location: '',
    icon: '',
    external: false,
    auth: false,
    wrapper: LayoutWrapper,
  },
  {
    name: 'Admins',
    slug: 'Admins',
    route: `/admins`,
    component: AdminsPage,
    menu_location: '',
    icon: '',
    external: false,
    auth: false,
    wrapper: LayoutWrapper,
  },
  {
    name: 'Admin-Add',
    slug: 'Admins-Add',
    route: `/admin/add-admin`,
    component: AddAdminsPage,
    menu_location: '',
    icon: '',
    external: false,
    auth: false,
    wrapper: LayoutWrapper,
  },
  // Other Route
  {
    name: 'addnotifications',
    slug: 'notification/add',
    route: '/notification/add',
    component: AddNotification,
    icon: '',
    external: false,
    auth: true,
    wrapper: LayoutWrapper,
    parent: 'notifications',
  },
];

export const getRouteByName = name => {
  return AppRoutes.find(route => route.name === name);
};

const AppRouter = () => {
  const [Store, StoreDispatch] = useStore();
  useEffect(() => {
    StoreDispatch({ type: 'Log', data: {} });
  }, []);

  return (
    <BrowserRouter>
      <div className='main-content'>
        <Routes>
          {AppRoutes.map((routeObj, routeIdx) => {
            if (!routeObj.external) {
              return routeObj.auth ? (
                <Route
                  key={`route-${routeIdx}`}
                  path={`/`}
                  element={<AuthGuard />}
                >
                  {routeObj.wrapper ? (
                    <Route
                      key={routeIdx}
                      path={`${routeObj.route}`}
                      element={
                        <routeObj.wrapper>
                          <routeObj.component />
                        </routeObj.wrapper>
                      }
                    />
                  ) : (
                    <Route
                      key={routeIdx}
                      path={`${routeObj.route}`}
                      element={<routeObj.component />}
                    />
                  )}
                </Route>
              ) : (
                <Route
                  key={routeIdx}
                  path={`${routeObj.route}`}
                  element={<routeObj.component />}
                />
              );
            }
          })}
          <Route
            path={`/*`}
            element={
              <Navigate to={getRouteByName('dashboard').route} replace />
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
