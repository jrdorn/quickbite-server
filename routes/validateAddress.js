const fetch = require("node-fetch");

//validate user address with Maps API
const validateAddress = (addr) => {
  return new Promise((resolve, reject) => {
    //validate user address
    fetch(
      `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${addr.address}&fields=formatted_address%2Cgeometry&inputtype=textquery&key=${process.env.MAPS_KEY}`,
      {
        method: "post",
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

module.exports = validateAddress;
