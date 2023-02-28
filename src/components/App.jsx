import { lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import RestrictedRoute from './RestrictedRoute';
import { refreshUser } from '../redux/auth/operations';
import SharedLayout from './SharedLayout/SharedLayout';
import { selectError } from '../redux/contacts/selectors';
import { Report } from 'notiflix/build/notiflix-report-aio';

const HomePage = lazy(() => import('../pages/Home'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));
const ContactsPage = lazy(() => import('../pages/Contacts'));
 
const App = () => {
  const dispatch = useDispatch();
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  useEffect(() => {
    error && Report.failure('Error:', `${error}`, 'OK');
  }, [error]);

  return (
    <BrowserRouter basename="/goit-react-hw-08-phonebook">
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route
            index
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<HomePage />}
              />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
            }
          />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<RegisterPage />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<LoginPage />}
              />
            }
          />
          <Route path="*" element={<Navigate to="/" replace={true} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;