import React from "react";
import { useEffect, useState } from "react/cjs/react.development";
import { Spinner } from "../../Spinner/Spinner";

import ReportOverviewModal from "../../Report/ReportOverviewModal";
import ReportService from "../../../services/ReportService";
import { formatDate } from "../../../utils/helperFunctions";
import SearchBar from "../../SearchBar/SearchBar";

export default function ReportsAdmin() {

    const [candidateReport, setCandidateReport] = useState({});
    const [reports, setReports] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [searchText, setSearchText] = useState("");
    const [status, setStatus] = useState(null);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    }

    const loadReports = () => {
        ReportService.fetchAllReportIds()
            .then(reports => setReports(reports))
            .finally(() => setIsLoading(false));
    };

    const deleteReport = (reportId) => {
        ReportService.deleteReport(reportId)
            .then(response => {
                if (response.status > 400) {
                    setStatus("Not successful.");
                } else {
                    setStatus("Delete successful.");
                    loadReports();
                }
            })
    }

    useEffect(() => {
        loadReports();
    }, []);

    if (isLoading) {
        return <Spinner />
    }

    return (
        <>
            <SearchBar searchText={searchText} setSearchText={setSearchText} />
            <div className="container mt-4">
                <table className="table table-bordered table-striped mt-4">
                    <tbody>
                        {reports.filter((report) => report.candidateName.toLowerCase().includes(searchText.trim()) || report.companyName.toLowerCase().includes(searchText.trim()))
                            .map((report, index) => {
                                return (<tr key={index}>
                                    <td>
                                        <div className="h4 m-0">{report.companyName}</div>
                                        <div className="text-muted">Company</div>
                                    </td>
                                    <td>
                                        <div className="h4 m-0">{report.candidateName}</div>
                                        <div className="text-muted">Candidate</div>
                                    </td>
                                    <td>
                                        <div className="h4 m-0">{formatDate(report.interviewDate)}</div>
                                        <div className="text-muted">Interview date</div>
                                    </td>
                                    <td>
                                        <div className="h4 m-0">{report.status}</div>
                                        <div className="text-muted">Status</div>
                                    </td>
                                    <td className="text-center align-middle">
                                        <div>
                                            <button className="btn" onClick={() => {
                                                setCandidateReport(report);
                                                toggleModal();
                                            }}>
                                                <i className="fas fa-info-circle"></i>
                                            </button>
                                            <button className="btn" onClick={() => {
                                                
                                                deleteReport(report.id);
                                                console.log(report.id);

                                            }}>
                                                <i className="fas fa-trash-alt"></i>
                                            </button>
                                        </div>
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
        </>
    );
}