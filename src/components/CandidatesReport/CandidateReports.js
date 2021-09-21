import React, { useState } from "react";

import ReportOverviewModal from "../Report/ReportOverviewModal";

import { formatDate } from "../../utils/helperFunctions";

export default function CandidateReports({ reports }) {

    const [candidateReport, setCandidateReport] = useState({});
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    }

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
                            return (<tr key={index}>
                                <td>{report.companyName}</td>
                                <td>{formatDate(report.interviewDate)}</td>
                                <td className="col-10">{report.status}</td>
                                <td className="col-2 text-center">
                                    <button className="btn" onClick={() => {
                                        setCandidateReport(report);
                                        toggleModal();
                                    }}>
                                        <i className="fas fa-info-circle"></i>
                                    </button>
                                </td>
                            </tr>);

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