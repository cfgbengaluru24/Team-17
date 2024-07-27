const jwt = require("jsonwebtoken");
const express = require("express");
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const Admin = require("../models/Admin");
const Doctor = require("../models/Doctor");
const School = require("../models/School");
//const { authenticateToken, authorizeRoles } = require('../middleware/authMiddleware');

const register = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    console.log(name, email, password, role);

    // Check if user already exists
    let existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(400).json({ message: "User already exists" });

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create user
    let newUser = new User({
      name,
      email,
      password: hashedPassword,
      role,
    });
    console.log(newUser);

    // Create corresponding document based on role
    let relatedDocument;
    switch (role) {
      case "Admin":
        relatedDocument = await Admin.create({
          email,
          password: hashedPassword,
        });
        newUser.admin_data = relatedDocument._id;
        break;
      case "Doctor":
        relatedDocument = await Doctor.create({
          email,
          password: hashedPassword,
          name,
          phone_number: "",
          experience: 0,
          specialization: "",
        });
        newUser.doctor_data = relatedDocument._id;
        break;
      case "School":
        relatedDocument = await School.create({
          email,
          password: hashedPassword,
          name,
          camp_ids: [],
        });
        newUser.school_data = relatedDocument._id;
        break;
      default:
        return res.status(400).json({ message: "Invalid role" });
    }

    // Save user
    await newUser.save();

    // Generate JWT token
    const token = jwt.sign(
      { id: newUser._id, role: newUser.role },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res
      .status(201)
      .json({ success: true, message: "User registered successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

const login = async (req, res) => {
    try {
        const {email, password} = req.body;
        const user = await User.findOne({ email});
        if (!user) return res.status(404).json({ message: 'User not found' });
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: 'Invalid email or password' });

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "36h" }
    );

    // res.cookie('token', token, { httpOnly: true }).json({ message: 'Logged in successfully' });

        res.status(200).json({
          status: true,
          message: "Successfully logged in",
          token:token,
          role:user.role,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error logging in', error });
    }
};

const adminRoute = async (req, res) => {
  res.status(200).json({ message: "Welcome, Admin!" });
};

const doctorRoute = async (req, res) => {
  res.status(200).json({ message: "Welcome, Doctor!" });
};

const schoolRoute = async (req, res) => {
  res.status(200).json({ message: "Welcome, School!" });
};

module.exports = { register, login, adminRoute, doctorRoute, schoolRoute };
