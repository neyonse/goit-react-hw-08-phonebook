import { useDispatch } from 'react-redux';
import { logoutUser } from 'redux/auth/operations';
import css from './UserMenu.module.css';
import PropTypes from 'prop-types';

export const UserMenu = ({ name }) => {
  const dispatch = useDispatch();

  return (
    <div className={css.userMenu}>
      <p className={css.userName}>{name}</p>
      <button type="button" onClick={() => dispatch(logoutUser())}>
        Log Out
      </button>
    </div>
  );
};

UserMenu.propTypes = {
  name: PropTypes.string.isRequired,
};
