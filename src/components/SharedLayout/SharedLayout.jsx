import css from './SharedLayout.module.css';
import { Outlet } from 'react-router-dom';
import { AppBar } from 'components/AppBar';

export const SharedLayout = () => {
  return (
    <>
      <AppBar />
      <div className={css.mainWrapper}>
        <Outlet />
      </div>
    </>
  );
};
