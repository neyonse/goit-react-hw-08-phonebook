import css from './Header.module.css';
import { NavLink } from 'react-router-dom';

export const Header = () => {
  return (
    <header>
      <NavLink className={css.navLink} to="/">
        Phonebook
      </NavLink>
      <nav>
        <ul className={css.navList}>
          <li>
            <NavLink className={css.navLink} to="/login">
              Login
            </NavLink>
          </li>
          <li>
            <NavLink className={css.navLink} to="/register">
              Register
            </NavLink>
          </li>
          <li>
            <NavLink className={css.navLink} to="/contacts">
              Contacts
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
