import { Routes, Route } from 'react-router-dom';
import { SharedLayout } from 'components/SharedLayout';
import {
  HomePage,
  RegisterPage,
  LoginPage,
  ContactsPage,
  NotFoundPage,
} from 'pages';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
