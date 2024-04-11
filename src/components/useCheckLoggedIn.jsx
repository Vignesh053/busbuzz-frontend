import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { isUserLoggedIn } from './service/userservice.js';

const useCheckLoggedIn = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const loggedIn = isUserLoggedIn();
    if (!loggedIn) {
      navigate('/login');
    }
  }, [navigate]);
};

export default useCheckLoggedIn;