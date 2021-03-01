
const axios = require('axios');
const server_api = axios.create({
  baseURL: "https://api.chucknorris.io",
  
});
module.exports = server_api;
