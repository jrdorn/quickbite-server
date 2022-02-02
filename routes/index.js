const express = require("express");
const router = express.Router();

const getCoords = require("./getCoords.js");

// import getCoords from "./getCoords.mjs";
// import getAddress from "./getAddress.mjs";
// import validateAddress from "./validateAddress.mjs";
// import findRestaurants from "./findRestaurants.mjs";
// import sendMail from "./sendMail.mjs";

/* GET home page. */
router.get("/", function (req, res, next) {
  res.json("gm ser");
});

/* TEST */
router.post("/", function (req, res, next) {
  res.send("got a post request");
});

router.get("/test", function (req, res, next) {
  res.json("test");
});
/* TEST */

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
