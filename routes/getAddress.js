const fetch = require("node-fetch");

//reverse geocoding - lookup address given lat/lng
// const getAddress = (coords) => {
//   return new Promise((resolve, reject) => {
//     fetch(
//       `https://maps.googleapis.com/maps/api/geocode/json?latlng=${coords.lat},${coords.lng}&key=${process.env.MAPS_KEY}`,
//       {
//         method: "post",
//         headers: {
//           Accept: "application/json",
//           "Content-Type": "application/json",
//         },
//       }
//     )
//       .then((res) => res.json())
//       .then((json) => resolve(json));
//   });
// };

// module.exports = getAddress;

const getAddress = async (coords) => {
  const response = await fetch(
    `https://maps.googleapis.com/maps/api/geocode/json?latlng=${coords.lat},${coords.lng}&key=${process.env.MAPS_KEY}`,
    {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }
  );
  return await response.json();
};

module.exports = getAddress;
