// This file provides an interface for all our api services defined in the services file of each module.

import axios from "axios";
import Auth from "./Auth";

// This url is used for demonstation purposes only. Configure the url for your app in a .env file.
const exampleURL = "https://kwara-api-eprocuremen-tool.herokuapp.com/api/v1"; 

const Api = axios.create({
  baseURL: process.env.REACT_APP_BASE_API_URL || exampleURL,
});

Api.interceptors.request.use(
  (config) => {
    // This adds an authorization key to config object if a token exists.
    if (Auth.isAuthenticated() === true) {
      config.headers.common["Authorization"] = `Bearer ${Auth.getToken()}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default Api;
