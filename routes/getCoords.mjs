/**
 keep most of the function in CLI 
 only keep the fetch request itself on server side
 maybe uninstall node-fetch from CLI 
 */

import fetch from "node-fetch";

//find lat/lng of user
export const getCoords = (macAddress) => {
  let body = {
    considerIp: "false",
    wifiAccessPoints: macAddress,
  };

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
        body: JSON.stringify(body),
      }
    ).then((res) => res.json());
  });
};
