const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Beneficiary = require('./Beneficiary');
const Doctor = require('./Doctor');
const campSchema = new Schema({
    camp_name: { type: String, required: true },
    total_number_of_people: { type: Number, required: true },
    
    beneficiary_id: [{ type: Schema.Types.ObjectId, ref: 'Beneficiary', required: false }],
    doctor_id:[ { type: Schema.Types.ObjectId, ref: 'Doctor', required: false }],
<<<<<<< HEAD
    date_of_treatment: [{ type: Date, required: false }],    
        
    
=======
    date_of_treatment: [{ type: Date, required: false }],
>>>>>>> 97b6cc9f59428ec5424ef7fb5b71eddef1c95461
    school_email: { 
        type: String, 
        required: true 
    },
    date_of_camp: {
        type: Date,
        required: true
    },
    status: { 
        type: String, 
        enum: ['live', 'not yet started', 'finished'], 
        required: true 
    }
}, { timestamps: true });

module.exports = mongoose.model('Camp', campSchema);