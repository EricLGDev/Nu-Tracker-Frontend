import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Welcome to Calorie Tracker App</h1>
      <div>
        <p>Please</p>
        <Link to='/login'>Log In</Link>
        <p>or</p>
        <Link to='/signup'>Sign Up</Link>
        <p>to use the app.</p>
      </div>
    </div>
  );
};

export default Home;
