const mongoose=require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    role: { 
        type: String, 
        enum: ['Admin', 'School', 'Doctor'], 
        required: true 
    },
    admin_data: { type: Schema.Types.ObjectId, ref: 'Admin' },
    doctor_data: { type: Schema.Types.ObjectId, ref: 'Doctor' },
    school_data: { type: Schema.Types.ObjectId, ref: 'School' }
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
