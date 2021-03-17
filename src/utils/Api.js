// This file provides an interface for all our api services defined in the services file of each module.

import axios from "axios";
import Auth from "./Auth";

const exampleURL = "https://kwara-api-eprocuremen-tool.herokuapp.com/api/v1";

const Api = axios.create({
  baseURL: process.env.REACT_APP_BASE_API_URL || exampleURL,
});

Api.interceptors.request.use(
  (config) => {
    // Add authorization key to config object if it exist
    if (Auth.isAuthenticated() === true) {
      config.headers.common["Authorization"] = `Bearer ${Auth.getToken()}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default Api;
