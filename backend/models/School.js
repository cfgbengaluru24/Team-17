const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schoolSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    camp_id: [{ type: Schema.Types.ObjectId, ref: "Camp", required: false }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("School", schoolSchema);
