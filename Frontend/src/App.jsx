import "./App.css";
import Dashboard from "./Components/Dashboard";
import CampHome from "./Components/Admin/CampHome";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<SignUp />} />
      <Route path="/" element={<Dashboard />} />
      <Route path="/camps" element={<CampHome />} />
    </Routes>
  );
};

export default App;
