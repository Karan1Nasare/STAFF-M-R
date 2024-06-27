/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable import/no-cycle */

import React, { lazy, useEffect, Suspense } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { useStore } from './store/context-store';
import AuthGuard from './Guards/AuthGuards';
import ErrorBoundary from './ErrorBoundary';
// Corrected file extension
const AddCourse = lazy(() => import('./components/Course/Course'));
const LanguagePage = lazy(() => import('./components/Language'));
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
  {
    name: 'dashboard',
    slug: 'dashboard',
    route: '/',
    component: Dashboard,
    icon: '',
    external: false,
    auth: true,
    wrapper: LayoutWrapper,
    parent: '/',
  },
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
  {
    name: 'language',
    slug: 'language',
    route: '/language',
    component: LanguagePage,
    icon: '',
    external: false,
    auth: true,
    wrapper: LayoutWrapper,
    parent: 'dashboard',
  },
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
    name: 'Admins-Add',
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
  }, [StoreDispatch]);
  console.log('User Store:', Store);
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <div className='main-content'>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              {AppRoutes.map((routeObj, routeIdx) => {
                if (!routeObj.external) {
                  return routeObj.auth ? (
                    <Route
                      key={`route-${routeIdx}`}
                      path={routeObj.route}
                      element={<AuthGuard />}
                    >
                      {routeObj.wrapper ? (
                        <Route
                          key={routeIdx}
                          path={routeObj.route}
                          element={
                            <routeObj.wrapper>
                              <routeObj.component />
                            </routeObj.wrapper>
                          }
                        />
                      ) : (
                        <Route
                          key={routeIdx}
                          path={routeObj.route}
                          element={<routeObj.component />}
                        />
                      )}
                    </Route>
                  ) : (
                    <Route
                      key={routeIdx}
                      path={routeObj.route}
                      element={<routeObj.component />}
                    />
                  );
                }
                return null;
              })}
              <Route
                path='*'
                element={
                  <Navigate to={getRouteByName('dashboard').route} replace />
                }
              />
            </Routes>
          </Suspense>
        </div>
      </ErrorBoundary>
    </BrowserRouter>
  );
};
export default AppRouter;
