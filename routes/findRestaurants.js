const fetch = require("node-fetch");

//search for restaurants near location
const findRestaurants = (addr) => {
  fetch(
    `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${addr.myCoords.lat}%2c${addr.myCoords.lng}&rankby=distance&type=restaurant&key=${process.env.MAPS_KEY}`,
    {
      method: "get",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }
  ).then((res) => res.json());
};

module.exports = findRestaurants;
