const fetch = require("node-fetch");

//validate user address with Maps API
const validateAddress = (addr) => {
  //validate user address
  fetch(
    `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${addr}&fields=formatted_address%2Cgeometry&inputtype=textquery&key=${process.env.MAPS_KEY}`,
    {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }
  ).then((res) => res.json());
};

module.exports = validateAddress;
