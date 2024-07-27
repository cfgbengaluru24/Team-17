const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const doctorSchema = new Schema({
    name: { type: String, required: true },
    phone_number: { type: String, required: false },
    experience: { type: Number, required: false },
    specialization: { type: String, required: false },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Doctor', doctorSchema);
