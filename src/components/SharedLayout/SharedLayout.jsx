import css from './SharedLayout.module.css';
import { Outlet } from 'react-router-dom';
import { Header } from 'components/Header';

export const SharedLayout = () => {
  return (
    <>
      <Header />
      <div className={css.mainWrapper}>
        <Outlet />
      </div>
    </>
  );
};
