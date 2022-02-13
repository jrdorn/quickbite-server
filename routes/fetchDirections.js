const fetch = require("node-fetch");

// fetch directions from origin to selected restaurant
const fetchDirections = (origin, dest) => {
  return new Promise((resolve, reject) => {
    fetch(
      `https://maps.googleapis.com/maps/api/directions/json?origin=${origin.lat},${origin.lng}&destination=${dest.lat},${dest.lng}&mode=walking&key=${process.env.MAPS_KEY}`,
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
