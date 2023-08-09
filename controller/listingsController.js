const Listing = require("../models/listingsModel");

module.exports = {
  getListing: async (req, res) => {
    try {
      const { id } = req.params;
      const listing = await Listing.findById(id);
      res.status(200).json(listing);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  getListings: async (req, res) => {
    try {
      const listing = await Listing.find();
      res.status(200).json(listing);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  postListing: async (req, res) => {
    try {
      const listing = await Listing.create(req.body);
      res.status(200).json(listing);
    } catch (error) {
      res.send(500).json(error);
    }
  },
};
