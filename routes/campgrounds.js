const express = require("express");
const router = express.Router();
const catchAsync = require("../utils/catchAsync");
const campgrounds = require("../controllers/campgrounds");
const ExpressError = require("../utils/ExpressError");
const Campground = require("../models/campground");
const { campgroundSchema, reviewSchema } = require("../schemas");
const { isLoggedIn, isAuthor, validateCampground } = require("../middleware");
const multer = require('multer');
const { storage } = require('../cloudinary');
const upload = multer({storage})
router
  .route("/")
  .get(catchAsync(campgrounds.index))
  .post(isLoggedIn, upload.array('image'), validateCampground,campgrounds.createCampground);
  
router.get("/new", isLoggedIn, campgrounds.renderNewForm);

router
  .route("/:id")
  .get(campgrounds.showCampground)
  .put(isLoggedIn, isAuthor, upload.array('image'),validateCampground, campgrounds.updateCampground)
  .delete(isLoggedIn, isAuthor, campgrounds.deleteCampground);


router.get("/:id/edit", isLoggedIn, isAuthor, campgrounds.renderEditForm);

module.exports = router;
