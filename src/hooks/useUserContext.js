import { useContext } from 'react';
import { UserContext } from '../context/userContext';

export const useUserContext = () => {
  const { state, dispatch } = useContext(UserContext);

  const setUserData = (userData) => {
    dispatch({ type: 'SET_USER_DATA', payload: userData });
  };

  const setLoading = (isLoading) => {
    dispatch({ type: 'SET_LOADING', payload: isLoading });
  };

  const setError = (error) => {
    dispatch({ type: 'SET_ERROR', payload: error });
  };

  return { state, setUserData, setLoading, setError };
};
