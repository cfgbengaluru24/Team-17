import "./App.css";
import AddCamp from "./Components/Admin/AddCamp";
import CampHome from "./Components/Admin/CampHome";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<SignUp />} />
      <Route path="/camps" element={<CampHome />} />
      <Route path="/addCamps" element={<AddCamp />} />
    </Routes>
  );
};

export default App;
