import Candidate from "../entities/Candidate";
import SessionStorageService from "./SessionStorageService";

export default class CandidateService {

    static fetchAllCandidates() {

        const token = "Bearer " + SessionStorageService.getToken();

        //console.log(token);

        const url = "http://localhost:3333/api/candidates";

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
                let newArr = data.map(c => new Candidate(c.name, c.avatar, c.email, c.education));
                console.log("novi ar", newArr);
                return newArr;
            });

    }


}