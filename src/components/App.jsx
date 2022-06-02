import { lazy, Suspense, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import SectionContainer from './SectionContainer';
import AppBar from './AppBar';
// import HomePage from 'pages/HomePage';
// import LoginPage from 'pages/LoginPage';
// import RegisterPage from 'pages/RegisterPage';
// import ContactsPage from 'pages/ContactsPage';
import { authOperations, authSelectors } from 'redux/auth';
import { useDispatch, useSelector } from 'react-redux';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

const HomePage = lazy(() => import('../pages/HomePage'));
const LoginPage = lazy(() => import('../pages/LoginPage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage'));
const ContactsPage = lazy(() => import('../pages/ContactsPage'));

export default function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(
    authSelectors.getIsFetchingCurrentUser
  );
  // console.log(isFetchingCurrentUser);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    !isFetchingCurrentUser && (
      <SectionContainer>
        <AppBar />

        <Suspense fallback={<h1>Loading...</h1>}>
          <Suspense fallback={<p>Загружаем...</p>}>
            <Routes>
              <Route
                path="/"
                element={
                  <PublicRoute>
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
        </Suspense>
      </SectionContainer>
    )
  );
}
