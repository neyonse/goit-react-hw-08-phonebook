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

export function App() {
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
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}
