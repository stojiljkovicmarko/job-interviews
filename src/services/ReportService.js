import Report from "../entities/Report";
import { getRandomId } from "../utils/helperFunctions";
import SessionStorageService from "./SessionStorageService";

export default class ReportService {

    static fetchAllReportIds() {

        const token = "Bearer " + SessionStorageService.getToken();

        const url = "http://localhost:3333/api/reports";

        const requestOptions = {
            method: "GET",
            headers: {
                "Authorization": token,
                "Content-type": "application/json"
            }
        }

        return fetch(url, requestOptions)
            .then(response => {
                if (response.status === 401) {
                    SessionStorageService.removeItem("token");
                    throw new Error("Token expired");
                }
                return response.json();
            })
            .then(data => {
                return data.filter(report => report.candidateName)
                    .map(c => new Report(c.id, c.candidateId, c.candidateName, c.companyId, c.companyName, c.interviewDate, c.phase, c.status, c.note));
            });

    }

    static fetchSingleCandidateReports(id) {

        const token = "Bearer " + SessionStorageService.getToken();

        const url = `http://localhost:3333/api/reports?candidateId=${id}`;

        const requestOptions = {
            method: "GET",
            headers: {
                "Authorization": token,
                "Content-type": "application/json"
            }
        }

        return fetch(url, requestOptions)
            .then(response => {
                if (response.status === 401) {
                    SessionStorageService.removeItem("token");
                    throw new Error("Token expired");
                }
                return response.json();
            })
            .then(data => {
                let newArr = data.map(c => new Report(c.id, c.candidateId, c.candidateName, c.companyId, c.companyName, c.interviewDate, c.phase, c.status, c.note));
                return newArr;
            });

    }

    static deleteReport(id) {
        const token = "Bearer " + SessionStorageService.getToken();

        const url = `http://localhost:3333/api/reports/${id}`;

        const requestOptions = {
            method: "DELETE",
            headers: {
                "Authorization": token,
                "Content-type": "application/json"
            }
        }

        return fetch(url, requestOptions);
    }

    static createReport(report) {

        console.log("pred upisivanje", report);

        const forSubmit = {
            "id": getRandomId(),
            "candidateId": report.candidate.id,
            "candidateName": report.candidate.name,
            "companyId": report.company.CompanyId,
            "companyName": report.company.companyName,
            "interviewDate": report.date,
            "phase": report.phase,
            "status": report.status,
            "note": report.notes
        }

        const token = "Bearer " + SessionStorageService.getToken();

        const url = "http://localhost:3333/api/reports";

        const requestOptions = {
            method: "POST",
            headers: {
                "Authorization": token,
                "Content-type": "application/json"
            },
            body: JSON.stringify(forSubmit)
        }

        return fetch(url, requestOptions);

    }

}