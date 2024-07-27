const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const adminSchema = new Schema({
    camp_data_started: [{ type: Schema.Types.ObjectId, ref: 'Camp' }],
    camp_data_not_started: [{ type: Schema.Types.ObjectId, ref: 'Camp' }],
    assigned_camps: [
        {
            doctor_id: { type: Schema.Types.ObjectId, ref: 'Doctor', required: true },
            camp_id: { type: Schema.Types.ObjectId, ref: 'Camp', required: true },
            assigned_date: { type: Date, default: Date.now }
        }
    ],
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Admin', adminSchema);
