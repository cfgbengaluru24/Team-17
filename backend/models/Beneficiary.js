const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BeneficiarySchema = new Schema(
  {
    name: { type: String, required: true },
    phonenumber: { type: String, required: true },
    age: { type: Number, required: true },
    allergic_information: { type: String, required: true },
    medico: { type: String, required: true },
    
    images: [
      {
        type: String,
        required: false, // You can make this required if every beneficiary must have images
      },
    ],
    tooth_number: { type: Number, required: true },
    tooth_condition: { type: String, required: true }, // e.g., caries, filling, crown, missing
    periodontal_probing_depths: {
      type: Number,
      required: true,
    },
    bleeding_on_probing: { type: Boolean, required: true },

    plaque_index: { type: Number, required: true },
    calculus_index: { type: Number, required: true },
    gingival_index: { type: Number, required: true },
    oral_cancer_screening_result:    { type: String, required: true },
    prescription: { type: String, required: true },
    isAnemic: { type: Boolean, required: true },
    level: { type: Number, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Beneficiary", BeneficiarySchema);
