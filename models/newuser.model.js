const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const newuserSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    birthdate: { type: String },
    password: { type: String, required: true },
    type: { type: String, required: true },
  },

  { timestamps: true }
);

const Newuser = mongoose.model("aptuser", newuserSchema);

module.exports = Newuser;
