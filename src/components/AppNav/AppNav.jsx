import { NavLink } from 'react-router-dom';
import css from './AppNav.module.css';

export const AppNav = ({ userLoggedIn }) => {
  return (
    <nav>
      {!userLoggedIn && (
        <ul className={css.navList}>
          <li>
            <NavLink className={css.navLink} to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className={css.navLink} to="/login">
              Log In
            </NavLink>
          </li>
          <li>
            <NavLink className={css.navLink} to="/signup">
              Sign Up
            </NavLink>
          </li>
        </ul>
      )}
      {userLoggedIn && (
        <li>
          <NavLink className={css.navLink} to="/contacts">
            Contacts
          </NavLink>
        </li>
      )}
    </nav>
  );
};
