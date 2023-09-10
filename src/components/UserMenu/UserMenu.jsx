import { useDispatch } from 'react-redux';
import { logOut } from 'redux/userSlice';
import css from './UserMenu.module.css';
import PropTypes from 'prop-types';

export const UserMenu = ({ login }) => {
  const dispatch = useDispatch();

  return (
    <div className={css.userMenu}>
      <p className={css.userName}>{login}</p>
      <button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </div>
  );
};

UserMenu.propTypes = {
  login: PropTypes.string.isRequired,
};
