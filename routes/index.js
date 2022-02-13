//setup routing
const express = require("express");
const router = express.Router();

const bodyParser = require("body-parser");

//functions to handle Google Maps API and send email
const getCoords = require("./getCoords.js");
const getAddress = require("./getAddress.js");
const validateAddress = require("./validateAddress.js");
const findRestaurants = require("./findRestaurants.js");
const fetchDirections = require("./fetchDirections.js");
const sendMail = require("./sendMail.js");

/* GET home page */
router.get("/", function (req, res, next) {
  res.json("gm");
});

/* getCoords */
router.post("/get-coords", function (req, res, next) {
  getCoords(req.body).then((answer) => res.send(answer));
});

//
//
/** for test purposes, send req.body back to user */
router.post("/testback", function (req, res, next) {
  res.send(req.body);
});
//
//

/* getAddress */
router.post("/get-address", function (req, res, next) {
  getAddress(req.body).then((answer) => res.send(answer));
});

/* validateAddress */
router.post("/validate-address", function (req, res, next) {
  validateAddress(req.body).then((answer) => res.send(answer));
});

/* findRestaurants */
router.post("/find-restaurants", function (req, res, next) {
  findRestaurants(req.body).then((answer) => res.send(answer));
});

//
//
/* fetchDirections */
router.post("/fetch-directions", function (req, res, next) {
  fetchDirections(req.body).then((answer) => res.send(answer));
});
//
//

/* sendMail */
router.post("/send-mail", function (req, res, next) {
  res.send(sendMail(req.body.directions, req.body.recipient));
});

module.exports = router;
