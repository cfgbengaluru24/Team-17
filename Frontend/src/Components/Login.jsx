/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import HashLoader from "react-spinners/HashLoader";
import './CSS/Login.css'
import logo from "../assets/images/rohini_logo.jpeg";


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


  const loginSubmitHandler = async (e) => {
    e.preventDefault();
    console.log(formData)
    setLoading(true);
    const payload = {
      email: `${formData.email}`,
      password: `${formData.password}`,
    };
    try {
      let res = await axios.post("http://localhost:3000/api/auth/login", payload);
      console.log(res.data)
      setFormData({
        email: "",
        password: "",
      });

      let role = res.data.role;
      let token = res.data.token;
      console.log(res, "login data");
      localStorage.setItem("token", token);
      localStorage.setItem("role", role);
      setLoading(false);
      toast.success(res.data.message);
      // console.log(object)
      // navigate("/home");
      if (role == 'Admin') {
        navigate('/adminDashboard')
      }
    } catch (error) {
      setLoading(false);
      // console.log(error.message)
      toast.error(error.message);
    }
  };

    return (
      <div >
        <div className="dash-top max-w-[1070px] mx-auto">
          <img onClick={() => navigate("/")} src={logo} alt="" />
          <button
            className="btn mt-0"
            onClick={() => {
              navigate("/");
            }}
          >
            Home
          </button>
        </div>
        <section>
          <div className="w-full max-w-[570px] mx-auto rounded-lg shadow-md p-10">
            <h3
              className="text-primaryColor font-bold text-[24px]
        leading-10 mb-4"
            >
              Welcome Back 👋
            </h3>
            <form action="" className="py-4 md:py-0" onSubmit={(e)=>{loginSubmitHandler(e)}}>
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
      </div>
    );
};

export default Login;
