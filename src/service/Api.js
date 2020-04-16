const axios = require("axios");

module.exports = class api {
  constructor() {
    axios.defaults.headers.common["Authorization"] =
      "Bearer " + process.env.APITOKEN;
  }

  async post(url, data) {
    await axios.post(process.env.BASE_URL + url, data);
  }

  async get(url, query) {
    return await axios.get(process.env.BASE_URL + url + "?" + query);
  }

  async put(url, data) {
    await axios.put(process.env.BASE_URL + url, data);
  }

  async delete(url, query) {
    await axios.delete(process.env.BASE_URL + url + "?" + query);
  }
};
