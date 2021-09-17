import React, { useEffect, useState } from "react";

import ReportService from "../../services/ReportService";

import { formatDate } from "../../utils/helperFunctions";
import Modal from "react-modal";
import ReportOverviewModal from "../Report/ReportOverviewModal";

export default function CandidateReports({ id }) {

    const [candidateReport, setCandidateReport] = useState({});
    const [reports, setReports] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const loadReports = () => {
        ReportService.fetchAllReportIds().then(reports => setReports(reports));
    }

    useEffect(() => {
        loadReports();
    }, []);

    //we could use react table hooks instead of bootstrap table
    //https://react-table.tanstack.com/


    return (
        <div className="container mt-4">
            <h1> Reports </h1>
            <table className="table table-bordered table-striped mt-4">
                <thead className="thead-dark">
                    <tr>
                        <th className="col-4">Company</th>
                        <th className="col-4">Interview date</th>
                        <th className="col-4" colSpan="2">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {reports.map((report, index) => {
                        if (report.candidateId === parseInt(id)) {
                            return (<tr key={index}>
                                <td>{report.companyName}</td>
                                <td>{formatDate(report.interviewDate)}</td>
                                <td className="col-10">{report.status}</td>
                                <td className="col-2 text-center">
                                    <button className="btn" onClick={() => {
                                        setCandidateReport(report);
                                        setIsModalOpen(true);
                                    }}>
                                        <i className="fas fa-info-circle"></i>
                                    </button>
                                </td>
                            </tr>);
                        }
                    })}
                </tbody>
            </table>

            <ReportOverviewModal 
            candidateReport={candidateReport}
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen} />

        </div>
    );
}