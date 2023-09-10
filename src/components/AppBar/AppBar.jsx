import css from './AppBar.module.css';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { selectUser } from 'redux/selectors';
import { UserMenu } from 'components/UserMenu';
import { AppNav } from 'components/AppNav';

export const AppBar = () => {
  const user = useSelector(selectUser);
  const userLoggedIn = user.isLoggedIn;

  return (
    <header className={css.appBar}>
      <AppNav userLoggedIn={userLoggedIn} />
      {userLoggedIn && <UserMenu login={user.login} />}
    </header>
  );
};
