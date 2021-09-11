import Companies from "../entities/Companies";
import SessionStorageService from "./SessionStorageService";

export default class CompanyService {

    static fetchAllCompaniesIds() {

        const token = "Bearer " + SessionStorageService.getToken();

        console.log(token);

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
                console.log(data);
                let newArr = data.map(c => new Companies(c.id, c.name, c.email));
                console.log("novi ar", newArr);
                return newArr;
            });

    }


}