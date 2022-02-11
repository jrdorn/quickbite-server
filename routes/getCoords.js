const fetch = require("node-fetch");

//find lat/lng of user
const getCoords = (body) => {
  return new Promise((resolve, reject) => {
    //send POST request to API
    fetch(
      `https://www.googleapis.com/geolocation/v1/geolocate?key=${process.env.MAPS_KEY}`,
      {
        method: "post",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        //validate body
        body: JSON.stringify(body),
      }
    )
      .then((res) => res.json())
      .then((json, err) => {
        if (err) {
          reject(err);
        } else {
          resolve(json);
        }
      });
  });
};

module.exports = getCoords;
