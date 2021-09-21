
import Candidate from "../entities/Candidate";
import SessionStorageService from "./SessionStorageService";
import { AvatarGenerator } from "random-avatar-generator";
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

        const generator = new AvatarGenerator();

        return fetch(url, requestOptions)
            .then(response => {
                if(response.status === 401) {
                    SessionStorageService.removeItem("token");
                    throw new Error("Token expired");
                }
                return response.json();
            })
            .then(data => {
               return data.filter(candidate => candidate.name)
                .map(c => {
                    const avatarToDisplay = generator.generateRandomAvatar();
                    return new Candidate(c.id, c.name, c.birthday, avatarToDisplay, c.email, c.education);
                });
            });
    }

    static fetchSingle(id) {
        const token = "Bearer " + SessionStorageService.getToken();
        
        const url = `http://localhost:3333/api/candidates/${id}`;

        const requestOptions = {
            method: "GET",
            headers: {
                "Authorization": token,
                "Content-type": "application/json"
            }
        }

        return fetch(url, requestOptions)
            .then(response => {
                //ako je token istekao
                // if(response.sttus === 401){
                //     SessionStorageService.clear('token');
                //     throw new Error('Token expired');
                // }
                return response.json();
            })
            .then(c => {
                //Object.values prati values vrati prazan niz ako nema nista
                //vratim error "no user"
                return new Candidate(c.id, c.name, c.birthday, c.avatar, c.email, c.education);
            });
    }
}