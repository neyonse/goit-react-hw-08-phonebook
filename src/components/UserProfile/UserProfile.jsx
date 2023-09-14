import { useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/selectors';
import { NavLink, Outlet } from 'react-router-dom';
import css from './UserProfile.module.css';
import { Suspense } from 'react';

export const UserProfile = () => {
  const name = useSelector(selectUser).name;

  return (
    <div className="container">
      <h1 className={css.profileHeader}>Hello, {name}!</h1>
      <div className={css.profileWrap}>
        <ul className={css.profileMenu}>
          <li>
            <NavLink to="/contacts" className={css.profileMenuLink}>
              Contacts
            </NavLink>
          </li>
          <li>
            <NavLink to="settings" className={css.profileMenuLink}>
              Settings
            </NavLink>
          </li>
          <li>
            <NavLink to="blacklist" className={css.profileMenuLink}>
              Blacklist
            </NavLink>
          </li>
        </ul>
        <Suspense fallback={<div className="message">Loading...</div>}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
};
