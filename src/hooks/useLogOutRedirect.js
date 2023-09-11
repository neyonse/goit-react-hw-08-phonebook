import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const useLogOutRedirect = () => {
  const userLoggedIn = useSelector(selectIsLoggedIn);
  const navigate = useNavigate();

  useEffect(() => {
    if (!userLoggedIn) {
      navigate('/', { replace: true });
    }
  }, [navigate, userLoggedIn]);
};
