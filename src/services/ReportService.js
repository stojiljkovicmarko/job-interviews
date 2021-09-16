import Report from "../entities/Report";
import SessionStorageService from "./SessionStorageService";

export default class ReportService {

    static fetchAllReportIds() {

        const token = "Bearer " + SessionStorageService.getToken();

        console.log(token);

        const url = "http://localhost:3333/api/reports";

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
                let newArr = data.map(c => new Report(c.id, c.candidateId, c.candidateName, c.companyId, c.companyName, c.interviewDate, c.phase, c.status, c.note));
                console.log("novi ar", newArr);
                return newArr;
            });

    }


}