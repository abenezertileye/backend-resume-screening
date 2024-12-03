const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const applicationSchema = new Schema({
  data: { type: Array, required: true, maxLength: 100 },
  application_date: {type: Date}
});

// Export model
module.exports = mongoose.model("application", applicationSchema);
