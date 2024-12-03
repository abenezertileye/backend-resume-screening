const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const jobPostSchema = new Schema({
  title: { type: String, required: true, maxLength: 100 },
  description: { type: String, maxLength: 500 },
  forms: { type: Array, required: true, maxLength: 100 },
  last_updated: {type: Date},
  applications: {type: Array},
});

// Export model
module.exports = mongoose.model("jobPost", jobPostSchema);
