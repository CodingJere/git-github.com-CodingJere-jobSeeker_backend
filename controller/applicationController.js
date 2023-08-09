const Application = require("../models/applicationModel");

module.exports = {
  getApplication: async (req, res) => {
    try {
      console.log(req.params, req.body);
      const { id } = req.params;
      const application = await Application.findById(id);
      res.status(200).json(application);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  getApplications: async (req, res) => {
    try {
      const application = await Application.find();
      res.status(200).json(application);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  addApplication: async (req, res) => {
    try {
      const application = await Application.create(req.body);
      res.status(200).json(application);
    } catch (error) {
      console.log("error adding application", error);
      res.send(error);
    }
  },
};
