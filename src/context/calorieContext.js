import React, { createContext, useReducer } from 'react';

// Define the initial state
const initialState = {
  entries: [],
  error: null,
  isLoading: false,
};

// Define the reducer function
const calorieReducer = (state, action) => {
  switch (action.type) {
    case 'GET_ENTRIES':
      return {
        ...state,
        entries: action.payload,
        isLoading: false,
      };
    case 'ADD_ENTRY':
      return {
        ...state,
        entries: [action.payload, ...state.entries],
        isLoading: false,
      };
    case 'DELETE_ENTRY':
      return {
        ...state,
        entries: state.entries.filter((entry) => entry.id !== action.payload),
        isLoading: false,
      };
    case 'SET_ERROR':
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    case 'SET_LOADING':
      return {
        ...state,
        isLoading: true,
      };
    default:
      return state;
  }
};

// Create the context
export const CalorieContext = createContext();

// Create the provider component
export const CalorieProvider = ({ children }) => {
  const [state, dispatch] = useReducer(calorieReducer, initialState);

  return (
    <CalorieContext.Provider value={{ state, dispatch }}>
      {children}
    </CalorieContext.Provider>
  );
};

