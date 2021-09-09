export default class SessionStorageService {
    static setItem(key, value) {
        sessionStorage.setItem(key, JSON.stringify(value));
    }
    
    static getItem(key) {
        const item = sessionStorage.getItem(key);
        return JSON.parse(key);
    }
}