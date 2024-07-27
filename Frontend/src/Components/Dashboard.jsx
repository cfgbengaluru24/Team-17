import { useNavigate } from "react-router-dom";
import logo from "../assets/images/rohini_logo.jpeg";
import "./CSS/Dashboard.css";


const Dashboard = () => {

  const navigate = useNavigate();

  return (
    <div className="dashboard">
      <div className="dash-top">
        <img onClick={()=>navigate('/')} src={logo} alt="" />
        <button className="btn mt-0" onClick={()=>{navigate('/login')}}>Login</button>
      </div>
      <div className="dash-main">
        <div className="content">
          <h1 className="tagline">RIGHT TO ORAL HEALTH IN INDIA</h1>
          <p className="belowtagline">Mission Zero Cavity - India's Largest </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
