const mongoose = require('mongoose');
const BeneficiarySchema = new mongoose.Schema({
    name: { type: String, required: true },
    number: { type: String, required: true },
    age: { type: Number, required: true },
    allergic_information: { type: String, required: true },
    medico: { type: String, required: true },
    images: [{
        type: String,
        required: false // You can make this required if every beneficiary must have images
    }],
    diagnostic_data: {
        level_1: {
            hemoglobin: { type: Number, required: true },
            frontal_teeth_condition: { type: String, required: true },
        },
        level_2: {
            hemoglobin: { type: Number, required: true },
            frontal_teeth_condition: { type: String, required: true },
        },
        level_3: {
            hemoglobin: { type: Number, required: true },
            frontal_teeth_condition: { type: String, required: true },
        }
    }
}, { timestamps: true });

module.exports = mongoose.model('Beneficiary', BeneficiarySchema);