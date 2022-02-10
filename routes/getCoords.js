/**
 keep most of the function in CLI 
 only keep the fetch request itself on server side
 */

// try {
//   fetch(`http://localhost:5000/get-address`, {
//     method: "post",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ a: 1, b: "two" }),
//   })
//     .then((res) => res.json())
//     .then((data) => console.log(data));
// } catch (e) {
//   console.log(e);
// }

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
        //serialize body value
        body: body,
      }
    )
      .then((res) => res.json())
      .then((json) => resolve(json));
  });
};

module.exports = getCoords;
