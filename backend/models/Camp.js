const mongoose = require('mongoose');

const campSchema = new mongoose.Schema({
    camp_name: { type: String, required: true },
    total_number_of_people: { type: Number, required: true },
    people_treated_info: [
        {
            beneficiary_id: { type: Schema.Types.ObjectId, ref: 'Beneficiary', required: true },
            doctor_id: { type: Schema.Types.ObjectId, ref: 'Doctor', required: true },
            date_of_treatment: { type: Date, required: true }
        }
    ],
    school_email: { 
        type: String, 
        required: true 
    },
    status: { 
        type: String, 
        enum: ['live', 'not yet started', 'finished'], 
        required: true 
    }
}, { timestamps: true });

module.exports = mongoose.model('Camp', campSchema);