const axios = require("axios");

module.exports = class api {
  constructor() {
    axios.defaults.headers.common["Authorization"] =
      "Bearer " + process.env.APITOKEN;
  }

  async SaveSession(data) {
    await axios.post(process.env.BASE_URL + "sessions", data);
  }
};
