const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ApplicationSchema = new Schema({
  title: { type: String, required: true, maxLength: 100 },
  forms: { type: Array, required: true, maxLength: 100 },
  applicants: {type: String},
});

// Export model
module.exports = mongoose.model("Application", ApplicationSchema);
