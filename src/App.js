import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Home from "./views/Home";
import Login from "./views/Login";
import Signup from "./views/Signup";
import { useUserContext } from './hooks/useUserContext';
import Dashboard from "./views/Dashboard";


function App() {
  const { user } = useUserContext();

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
          <Route path="/signup" element={user ? <Navigate to="/" /> : <Signup />} />
          /* {user && (
            <Route path="/dashboard" element={<Dashboard />} />
            )} */
        </Routes>
      </Router>
    </div>
  );
}

export default App;
