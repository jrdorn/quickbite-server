//setup routing
const express = require("express");
const router = express.Router();

const bodyParser = require("body-parser");

//functions to handle Google Maps API and send email
const getCoords = require("./getCoords.js");
const getAddress = require("./getAddress.js");
const validateAddress = require("./validateAddress.js");
const findRestaurants = require("./findRestaurants.js");
const sendMail = require("./sendMail.js");

/* GET home page */
router.get("/", function (req, res, next) {
  res.json("gm");
});

/* getCoords */
router.post("/get-coords", function (req, res, next) {
  // res.send(getCoords(req.body.body));
  res.send(req); //test call, return CLI request
});

/** the answer to life, the universe, and everything */
router.get("/the-answer", function (req, res, next) {
  // res.send(getCoords(req.body.body));
  res.send("42"); //test call, return CLI request
});
/** */

/* getAddress */
router.post("/get-address", function (req, res, next) {
  res.send(getAddress(req.body.coords));
});
// router.post("/get-address", function (req, res, next) {
//   res.send(JSON.stringify({ title: req.body.a + "POST successful" }));
// });

/* validateAddress */
router.post("/validate-address", function (req, res, next) {
  res.send(validateAddress(req.body.addr));
});

/* findRestaurants */
router.post("/find-restaurants", function (req, res, next) {
  res.send(findRestaurants(req.body.addr));
});

/* fetchDirections */
router.post("/fetch-directions", function (req, res, next) {
  res.send(findRestaurants(req.body.addr));
});

/* sendMail */
router.post("/send-mail", function (req, res, next) {
  res.send(sendMail(req.body.directions, req.body.recipient));
});

module.exports = router;
