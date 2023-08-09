const express = require("express");
const router = express.Router();

const listingsController = require("../controller/listingsController");
//get listing
router.get("/:id", listingsController.getListing);
//get listings
router.get("/", listingsController.getListings);
//post listing
router.post("/", listingsController.postListing);

module.exports = router;
