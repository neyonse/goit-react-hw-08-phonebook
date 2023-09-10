import { useSelector } from 'react-redux';
import { selectUser } from 'redux/selectors';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const useLogOutRedirect = () => {
  const userLoggedIn = useSelector(selectUser).isLoggedIn;
  const navigate = useNavigate();

  useEffect(() => {
    if (!userLoggedIn) {
      navigate('/', { replace: true });
    }
  }, [navigate, userLoggedIn]);
};
