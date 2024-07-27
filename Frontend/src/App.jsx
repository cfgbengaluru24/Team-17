import "./App.css";
import Dashboard from "./Components/Dashboard";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import { Routes, Route } from "react-router-dom";


const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<SignUp />} />
      <Route path="/" element={<Dashboard />} />
    </Routes>
  );
};

export default App;
