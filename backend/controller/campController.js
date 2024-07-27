const express = require("express");
const Camp = require("../models/Camp");
const Admin = require("../models/Admin");
const User = require("../models/User");
//  const {authorizeRoles} = require('../middleware/authMiddleware');
const Beneficiary = require("../models/Beneficiary");
const Doctor = require("../models/Doctor");

exports.createCamp = async (req, res) => {
  try {
    const { camp_name, total_number_of_people, school_email, status } =req.body;

        // if (req.user.role !== 'Admin') {
        //     return res.status(403).json({ message: 'Only admins can create camps' });
        // }

        // Create the camp
        const newCamp = new Camp({
            camp_name,
            total_number_of_people,
            beneficiary_id: [],
            doctor_id: [],
            school_email,
            status,
            date_of_camp: new Date()
        });

    // Save the camp
    await newCamp.save();

    // Find the school by email and add the camp ID to its list of camps
    const schoolUser = await User.findOne({ email: school_email });
    if (schoolUser && schoolUser.role === "School") {
      await School.findByIdAndUpdate(schoolUser.school_data, {
        $push: { camp_ids: newCamp._id },
      });
    }

    // Update Admin model
    const admin = await Admin.findOne(); // You might need to refine this if you have multiple admins
    if (admin) {
      admin.camp_data_not_started.push(newCamp._id);
      await admin.save();
    }

    res.status(201).json({ message: "Camp created successfully", camp: newCamp });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

exports.getCampById = async (req, res) => {
  try {
    const { id } = req.params;

    // Find the camp
    const camp = await Camp.findById(id)
      .populate("beneficiary_id")
      .populate("doctor_id");
    if (!camp) return res.status(404).json({ message: "Camp not found" });

    res.status(200).json({ camp });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

exports.getAllCamps = async (req, res) => {
    try {
        const camps = await Camp.find()
            .populate('beneficiary_id')
            .populate('doctor_id');
        res.status(200).json({ camps });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Server error', error });
    }
};

exports.getBeneficiariesByCampId = async (req, res) => {
    try {

        const { campId } = req.params;

        // Find the camp by ID and populate the beneficiaries
        const camp = await Camp.findById(campId)
            .populate('beneficiary_id'); // Ensure this matches the field in your Camp schema

        if (!camp) return res.status(404).json({ message: 'Camp not found' });

        // Beneficiaries associated with the camp
        const beneficiaries = camp.beneficiary_id;

        res.status(200).json({ beneficiaries });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};
