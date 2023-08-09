const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, " Please enter a name "],
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  job: {
    type: String,
    required: true,
  },
});

const ApplicationModel = mongoose.model("Application", applicationSchema);

module.exports = ApplicationModel;
