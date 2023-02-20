import { useState } from 'react';
import axios from 'axios';
import { useUserContext } from './useUserContext';
import { useNavigate } from 'react-router-dom';

export const useSignup = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const { setUserData } = useUserContext();
  const navigate = useNavigate();

  const handleSignup = async (formValues) => {
    setIsLoading(true);
    setErrorMessage(null);
  
    try {
      const res = await axios.post('https://nu-tracker-api.onrender.com/signup', formValues);
      setUserData(res.data);
    } catch (error) {
      setErrorMessage(error.message);
    }
  
    setIsLoading(false);
    navigate('/login');
  };
  

  return {
    isLoading,
    errorMessage,
    handleSignup,
  };
};




