import { Routes, Route } from 'react-router-dom';
import { SharedLayout } from 'components/SharedLayout';
import {
  HomePage,
  SignUpPage,
  LoginPage,
  UserProfilePage,
  ContactsPage,
  NotFoundPage,
} from 'pages';
import { Toaster } from 'react-hot-toast';
import { UserSettings } from 'components/UserSettings';
import { UserBlacklist } from './UserBlacklist';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { refreshUser } from 'redux/auth/operations';
import { PrivateRoute } from './PrivateRoute';

export function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      <Toaster position="bottom-right" />
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/profile" element={<UserProfilePage />}>
            <Route path="settings" element={<UserSettings />} />
            <Route path="blacklist" element={<UserBlacklist />} />
          </Route>
          <Route
            path="/contacts"
            element={
              // <PrivateRoute path="/login">
              //   <ContactsPage />
              // </PrivateRoute>
              <PrivateRoute component={<ContactsPage />} redirectTo="/login" />
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}
