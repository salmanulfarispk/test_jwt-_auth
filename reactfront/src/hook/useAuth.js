import { useEffect, useState } from 'react';
import { IsUser } from '../api/apis';

const useAuth = () => {
  const [authState, setAuthState] = useState({
    isAuthenticated: false,
    user: null,
    loading: true,
  });

  useEffect(() => {
    
   IsUser(setAuthState);
     
  }, []);

  return authState;
};

export default useAuth;
