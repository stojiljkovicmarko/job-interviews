import Candidate from "../entities/Candidate";
import SessionStorageService from "./SessionStorageService";

export default class CandidateService {

    static fetchAllCandidates() {

        const token = "Bearer " + SessionStorageService.getToken();

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
                return data.map(c => new Candidate(c.id, c.name, c.birthday, c.avatar, c.email, c.education));
            });

    }


}