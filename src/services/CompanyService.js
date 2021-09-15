import Company from "../entities/Company";
import SessionStorageService from "./SessionStorageService";

export default class CompanyService {

    static fetchAllCompanies() {

        const token = "Bearer " + SessionStorageService.getToken();

        const url = "http://localhost:3333/api/companies";

        const requestOptions = {
            method: "GET",
            headers: {
                "Authorization": token,
                "Content-type": "application/json"
            }
        }

        return fetch(url, requestOptions)
            .then(response => response.json())
            .then(data => {
                return data.map(c => new Company(c.id, c.name, c.email));
            });

    }


}