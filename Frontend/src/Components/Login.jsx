/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import HashLoader from "react-spinners/HashLoader";
import './CSS/Login.css'

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  return (
    <section>
      <div className="w-full max-w-[570px] mx-auto rounded-lg shadow-md p-10">
        <h3
          className="text-primaryColor font-bold text-[24px]
        leading-10 mb-4"
        >
          Welcome Back 👋
        </h3>
        <form
          action=""
          className="py-4 md:py-0"
          
        >
          <div className="mb-2">
            <input
              className="form-inp"
              type="email"
              placeholder="Enter your email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-2">
            <input
              className="form-inp"
              type="password"
              placeholder="Enter your password"
              name="password"
              autoComplete="false"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
          </div>

          <button disabled={loading} className="btn w-full" type="submit">
            {loading ? <HashLoader size={35} color="#fff" /> : "Login"}
          </button>
          <p className="mt-5 text-center text-textColor">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="text-primaryColor hover:underline font-medium"
            >
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Login;
