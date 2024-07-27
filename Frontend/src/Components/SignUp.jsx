/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import signupImg from "../assets/images/signup.gif";
import avatar from '../assets/images/avatar-icon.png'

import { toast } from "react-toastify";
import HashLoader from "react-spinners/HashLoader";

const SignUp = () => {
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    photo: null,
    role: "patient",
    gender: "",
  });
  const handleInputChange = (e) => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  return (
    <section className="px-5">
      <div className="max-w-[1070px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 ">
          {/* image  */}
          <div className="bg-primaryColor hidden lg:block rounded-l-lg">
            <figure className="rounded-l-lg">
              <img src={signupImg} className="w-full rounded-l-lg" alt="" />
            </figure>
          </div>
          {/* form  */}
          <div className="rounded-r-lg lg:pl-16 py-2">
            <h3
              className="font-semibold text-[24px]
        leading-10 mb-4"
            >
              Create{" "}
              <span className="text-primaryColor font-bold">Account</span>
            </h3>

            <form action="" method="POST" className="py-4 md:py-0">
              <div className="mb-2">
                <input
                  className="form-inp"
                  type="name"
                  placeholder="Full Name"
                  name="name"
                  value={formData.name}
                  onChange={(e) => handleInputChange(e)}
                  required
                />
              </div>
              <div className="mb-2">
                <input
                  className="form-inp"
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange(e)}
                  required
                />
              </div>
              <div className="mb-2">
                <input
                  className="form-inp"
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={formData.password}
                  autoComplete="false"
                  onChange={(e) => handleInputChange(e)}
                  required
                />
              </div>

              <div className="flex mb-2 lg:items-center justify-between flex-col lg:flex-row">
                <div>
                  <label
                    htmlFor="role"
                    className="text-headingColor font-bold leading-7"
                  >
                    You are a:
                  </label>
                  <select
                    name="role"
                    id="role"
                    value={formData.role}
                    onChange={(e) => handleInputChange(e)}
                    className="text-textColor font-semibold leading-3 p-4 focus:outline-none"
                  >
                    <option value="patient">Patient</option>
                    <option value="doctor">Doctor</option>
                    <option value="beneficiary">Beneficiary</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="gender"
                    className="text-headingColor font-bold leading-7"
                  >
                    Gender:
                  </label>
                  <select
                    name="gender"
                    id="gender"
                    value={formData.gender}
                    onChange={(e) => handleInputChange(e)}
                    className="text-textColor font-semibold leading-3 p-4 focus:outline-none"
                  >
                    <option value="">Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <button
                disabled={loading}
                className="btn w-full mt-6"
                type="submit"
              >
                {loading ? <HashLoader size={35} color="#fff" /> : "Sign up"}
              </button>
              <p className="mt-5 text-center text-textColor">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="text-primaryColor hover:underline font-medium"
                >
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
