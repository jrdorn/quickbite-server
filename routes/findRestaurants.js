const fetch = require("node-fetch");

//search for restaurants near location
const findRestaurants = (coords) => {
  return new Promise((resolve, reject) => {
    fetch(
      `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${coords.lat}%2c${coords.lng}&rankby=distance&type=restaurant&key=${process.env.MAPS_KEY}`,
      {
        method: "get",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
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

module.exports = findRestaurants;
