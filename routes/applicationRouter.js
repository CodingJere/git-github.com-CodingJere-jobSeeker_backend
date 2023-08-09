const express = require("express");
const router = express.Router();
const applicationController = require("../controller/applicationController");

router.get("/:id", applicationController.getApplication);
router.get("/", applicationController.getApplications);
router.post("/", applicationController.addApplication);

module.exports = router;
