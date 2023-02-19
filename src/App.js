import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Home from "./views/Home";
import Login from "./views/Login";
import Signup from "./views/Signup";
import { useUserContext } from './hooks/useUserContext';
import Dashboard from "./views/Dashboard";
import AddEntry from "./components/AddEntry";
// import ViewEntry from "./components/ViewEntry";
import DashNavbar from './components/DashNavbar';
import "./assets/style/background.css"

function App() {

  // const styles = {
  //   html: {
  //     backgroundColor: "#f1f1f1",
  //     height: "100%",
  //   }
  // };
  const { user } = useUserContext();

  return (
    <div className="App">
      <Router>
        {user && <DashNavbar />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
          <Route path="/signup" element={user ? <Navigate to="/" /> : <Signup />} />
          {user && (
            <Route path="/dashboard" element={<Dashboard />} />
          )}
          {!user && (
            <Route path="/dashboard" element={<Navigate to="/login" />} />
          )}
          {user && (
            <Route path="/add-entry" element={<AddEntry />} />
          )}
          {/* {user && (
            <Route path="/view-entry" element={<ViewEntry />} />
          )} */}
        </Routes>
      </Router>
    </div>
  );
}
export default App;