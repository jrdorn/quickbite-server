var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

/* getAddress */
router.get("/get-address", function (req, res, next) {
  res.render("index", { title: "getAddress" });
});

/* getCoords */
router.get("/get-coords", function (req, res, next) {
  res.render("index", { title: "getCoords" });
});

/* validateAddress */
router.get("/validate-address", function (req, res, next) {
  res.render("index", { title: "validateAddress" });
});

/* findRestaurants */
router.get("/find-restaurants", function (req, res, next) {
  res.render("index", { title: "findRestaurants" });
});

/* sendMail */
router.get("/send-mail", function (req, res, next) {
  res.render("index", { title: "sendMail" });
});

module.exports = router;
