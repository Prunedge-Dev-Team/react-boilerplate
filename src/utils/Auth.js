export default class Auth {
    static isAuthenticated() {
      const token = localStorage.getItem("token");
      return token ? true : false;
    }
  
    static setToken(token) {
      localStorage.setItem("token", token);
    }
  
    static getToken() {
      return localStorage.getItem("token");
    }
  
    static removeToken() {
      localStorage.removeItem("token");
    }
  }