const { model, Schema } = require("mongoose");

const listingSchema = Schema({
  title: {
    type: String,
    required: true,
  },
  salary: {
    type: String,
    required: true,
  },
  work_style: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  requirements: {
    type: String,
    required: true,
  },
  offering: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});

const ListingModel = model("Listing", listingSchema);

module.exports = ListingModel;
