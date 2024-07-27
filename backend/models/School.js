const mongoose  = require('mongoose');

const schoolSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    camp_ids: [{ type: Schema.Types.ObjectId, ref: 'Camp' }]
}, { timestamps: true });

module.exports = mongoose.model('School', schoolSchema);