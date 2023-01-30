const express = require("express");
const router = express.Router();
const {submitResumeController} = require("../controller/fromSubmit");
const {formValidation} =  require("../controller/authHandler/validation");

const multer  = require('multer');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads/')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.originalname + '-' + uniqueSuffix)
    }
  });
const upload = multer({ storage: storage });

router.post("/submit",
    upload.fields([
                    { name: 'resumeLink', maxCount: 1 },
                    { name: 'coverLink', maxCount: 1 }
                ]),
  formValidation,submitResumeController);

module.exports = {router};