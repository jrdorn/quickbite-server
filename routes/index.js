var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.json("gm");
});

/* getCoords */
router.get("/get-coords", function (req, res, next) {
  res.json("getCoords");
});

/* getAddress */
router.get("/get-address", function (req, res, next) {
  res.json("getAddress");
});

/* validateAddress */
router.get("/validate-address", function (req, res, next) {
  res.json("validateAddress");
});

/* findRestaurants */
router.get("/find-restaurants", function (req, res, next) {
  res.json("findRestaurants");
});

/* sendMail */
router.get("/send-mail", function (req, res, next) {
  res.json("sendMail");
});

module.exports = router;
