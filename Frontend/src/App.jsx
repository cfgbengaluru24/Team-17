import "./App.css";
import AddCamp from "./Components/Admin/AddCamp";
import Dashboard from "./Components/Dashboard";
import CampHome from "./Components/Admin/CampHome";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import AddPatientDetails from "./Components/Doctor/AddPatientDetails";
import AdminDashboard from "./Components/Admin/AdminDashboard";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<SignUp />} />
      <Route path="/" element={<Dashboard />} />
      <Route path="/camps" element={<CampHome />} />
      <Route path="/addCamps" element={<AddCamp />} />
      <Route path="/adminDashboard" element={<AdminDashboard />} />
      <Route path="/addPatient" element={<AddPatientDetails />} />
    </Routes>
  );
};

export default App;
