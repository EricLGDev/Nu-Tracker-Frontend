import { useEffect } from 'react';
import { useUserContext } from './useUserContext';
import { useCalorieContext } from './useCalorieContext';

export const useLogout = () => {
  const { setUserData } = useUserContext();
  const { clearCalories } = useCalorieContext();

  useEffect(() => {
    const logout = async () => {
      setUserData(null);
      clearCalories();
      localStorage.setItem('access-token', '');
    };

    logout();
  }, [setUserData, clearCalories]);

  return null;
};
