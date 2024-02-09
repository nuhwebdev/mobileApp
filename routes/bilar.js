var express = require("express");
var router = express.Router();

var mongoose = require("mongoose");
var BilModel = require("../models/bilModel.js");

//req och res här är request- respektive response-objekten
router.get("/", function (req, res, next) {
  //find är Mongoose funktion.
  BilModel.find().then(function (bilarna) {
    //Om det inte uppstår fel så skicka bilarna i jsonformat
    res.json(bilarna);
  });
});

module.exports = router;
