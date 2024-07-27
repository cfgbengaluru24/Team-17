const mongoose=require('mongoose');
const bcrypt = require('bcryptjs');
const Schema = mongoose.Schema; 
const userSchema = new Schema({
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


// userSchema.pre('save', async function(next) {
//     if (!this.isModified('password')) {
//         return next();
//     }

//     try {
//         const salt = await bcrypt.genSalt(10);
//         this.password = await bcrypt.hash(this.password, salt);
//         next();
//     } catch (error) {
//         next(error);
//     }
// });

// Method to compare provided password with the hashed password in the database
userSchema.methods.comparePassword = async function(candidatePassword) {
    return await bcrypt.compare(candidatePassword, this.password);
};


module.exports = mongoose.model('User', userSchema);
