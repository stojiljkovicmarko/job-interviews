export default class SessionStorageService {
  static setItem(key, value) {
    sessionStorage.setItem(key, JSON.stringify(value));
  }

  static getItem(key) {
    const item = sessionStorage.getItem(key);
    return JSON.parse(item);
  }

  static removeItem(key) {
    sessionStorage.removeItem(key);
  }

  static setToken(token) {
    if (token !== undefined) {
      sessionStorage.setItem("token", JSON.stringify(token));
    }
  }

  static getToken() {
    const token = sessionStorage.getItem("token");
    return JSON.parse(token);
  }
}