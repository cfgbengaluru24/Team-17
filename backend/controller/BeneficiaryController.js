const express=require('express');
const Beneficiary=require('../models/Beneficiary');

// const Beneficiary = require('../models/Beneficiary');
const User = require('../models/User');

exports.createBeneficiary = async (req, res) => {
    try {
        // Check if the user is a doctor
        // const user = req.user; // Get user information from req.user
        // if (!user || user.role !== 'Doctor') {
        //     return res.status(403).json({ message: 'Only doctors can create beneficiaries' });
        // }


        const {
            name,
            phonenumber,
            age,
            allergic_information,
            medico,
            images,
            tooth_number,
            tooth_condition,
            periodontal_probing_depths,
            bleeding_on_probing,
            plaque_index,
            calculus_index,
            gingival_index,
            oral_cancer_screening_result,
            prescription,
            isAnemic,
            level
        } = req.body;

        if (!name || !phonenumber || !age || !allergic_information || !medico || 
            !tooth_number || !tooth_condition || periodontal_probing_depths === undefined || 
            bleeding_on_probing === undefined || !plaque_index || !calculus_index || 
            !gingival_index || !oral_cancer_screening_result || !prescription || 
            isAnemic === undefined || level === undefined) {
            return res.status(400).json({ message: 'All required fields must be provided' });
        }

        // Create a new beneficiary
        const newBeneficiary = new Beneficiary({
            name :name,
            phonenumber:phonenumber,
            age:age,
            allergic_information:allergic_information,
            medico:medico,
            images:images,
            tooth_number:tooth_number,
            tooth_condition:tooth_condition,
            periodontal_probing_depths:periodontal_probing_depths,
            bleeding_on_probing:bleeding_on_probing,
            plaque_index:plaque_index,
            calculus_index:calculus_index,
            gingival_index:gingival_index,
            oral_cancer_screening_result:oral_cancer_screening_result,
            prescription:prescription,
            isAnemic:isAnemic,
            level:level
        });

        // Save the beneficiary
        await newBeneficiary.save();

        res.status(201).json({ message: 'Beneficiary created successfully', beneficiary: newBeneficiary });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Server error', error });
    }
};
exports.updateBeneficiary = async (req, res) => {
    try {
       
        // const user = req.user; // Get user information from req.user
        // if (!user || user.role !== 'Doctor') {
        //     return res.status(403).json({ message: 'Only doctors can create beneficiaries' });
        // }

        const { id } = req.params;
        const updateData = req.body;

        // Find and update the beneficiary
        const updatedBeneficiary = await Beneficiary.findByIdAndUpdate(id, updateData, { new: true });
        if (!updatedBeneficiary) return res.status(404).json({ message: 'Beneficiary not found' });

        res.status(200).json({ message: 'Beneficiary updated successfully', beneficiary: updatedBeneficiary });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

exports.getBeneficiaryById = async (req, res) => {
    try {
        // const user = req.user; // Get user information from req.user
        // if (!user || user.role !== 'Doctor'|| user.role !==school) {
        //     return res.status(403).json({ message: 'Only doctors can create beneficiaries' });
        // }
        const { id } = req.params;

        // Find the beneficiary
        const beneficiary = await Beneficiary.findById(id);
        if (!beneficiary) return res.status(404).json({ message: 'Beneficiary not found' });

        res.status(200).json({ beneficiary });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
}


