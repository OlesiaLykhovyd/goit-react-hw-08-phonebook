import { lazy, Suspense, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import SectionContainer from './SectionContainer';
import AppBar from './AppBar';
import { authOperations, authSelectors } from 'redux/auth';
import { useDispatch, useSelector } from 'react-redux';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import Loader from './Loader/Loader';

const HomePage = lazy(() => import('../pages/HomePage'));
const LoginPage = lazy(() => import('../pages/LoginPage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage'));
const ContactsPage = lazy(() => import('../pages/ContactsPage'));

export default function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(
    authSelectors.getIsFetchingCurrentUser
  );

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    !isFetchingCurrentUser && (
      <SectionContainer>
        <AppBar />

        <Suspense fallback={<Loader />}>
          <Routes>
            <Route
              path="/"
              element={
                <PublicRoute restricted redirectTo="/contacts">
                  <HomePage />
                </PublicRoute>
              }
            />
            <Route
              path="/login"
              element={
                <PublicRoute restricted redirectTo="/contacts">
                  <LoginPage />
                </PublicRoute>
              }
            />
            <Route
              path="/register"
              element={
                <PublicRoute restricted redirectTo="/contacts">
                  <RegisterPage />
                </PublicRoute>
              }
            />
            <Route
              path="/contacts"
              element={
                <PrivateRoute path="/contacts">
                  <ContactsPage />
                </PrivateRoute>
              }
            />
          </Routes>
        </Suspense>
      </SectionContainer>
    )
  );
}
