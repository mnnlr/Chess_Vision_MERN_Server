const express = require('express');
const router = express.Router();
const upload = require("../middleware/uploads");
const  uploadImage  = require("../controllers/uploadController");




router.route("/upload").post(upload.single("croppedImage"), uploadImage);




module.exports = router;