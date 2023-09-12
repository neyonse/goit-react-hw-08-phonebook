import { useDispatch } from 'react-redux';
import { logoutUser } from 'redux/auth/operations';
import { NavLink } from 'react-router-dom';
import css from './UserMenu.module.css';
import PropTypes from 'prop-types';

export const UserMenu = ({ email }) => {
  const dispatch = useDispatch();

  return (
    <div className={css.userMenu}>
      <NavLink to="/profile" className={css.userName}>
        {email}
      </NavLink>
      <button type="button" onClick={() => dispatch(logoutUser())}>
        Log Out
      </button>
    </div>
  );
};

UserMenu.propTypes = {
  email: PropTypes.string.isRequired,
};
