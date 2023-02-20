import { useContext } from 'react';
import axios from 'axios';
import { CalorieContext } from '../context/calorieContext';

export const useCalorieContext = () => {
  const { state, dispatch } = useContext(CalorieContext);

  const getEntries = async (userId) => {
    try {
      dispatch({ type: 'SET_LOADING' });
      const response = await axios.get(`https://nu-tracker-api.onrender.com/diary/${userId}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('access_token')}` }
      });
      const data = response.data;
      dispatch({ type: 'GET_ENTRIES', payload: data });
    } catch (error) {
      dispatch({ type: 'SET_ERROR', payload: error.message });
    }
  };

  const addEntry = (userId, entry) => {
    dispatch({ type: 'SET_LOADING' });

    axios.post(`https://nu-tracker-api.onrender.com/diary`, entry, {
      headers: { Authorization: `Bearer ${localStorage.getItem('access_token')}` },
    })
      .then((response) => {
        dispatch({ type: 'ADD_ENTRY', payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: 'SET_ERROR', payload: error.message });
      });
  };

  const deleteEntry = (userId, entryId) => {
    dispatch({ type: 'SET_LOADING' });

    axios.delete(`https://nu-tracker-api.onrender.com/diary/${entryId}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('access_token')}` },
    })
      .then(() => {
        dispatch({ type: 'DELETE_ENTRY', payload: entryId });
      })
      .catch((error) => {
        dispatch({ type: 'SET_ERROR', payload: error.message });
      });
  };

  const clearEntries = () => {
    dispatch({ type: 'CLEAR_ENTRIES' });
  };

  return {
    entries: state.entries,
    error: state.error,
    isLoading: state.isLoading,
    getEntries,
    addEntry,
    deleteEntry,
    clearEntries,
  };
};

