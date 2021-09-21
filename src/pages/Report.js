import React from "react";
import { useParams, useLocation } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";

import ErrorComponent from "../components/ErrorComponent/ErrorComponent";
import CandidateDetails from "../components/CandidatesReport/CandidateDetails";
import CandidateReports from "../components/CandidatesReport/CandidateReports";
import { Spinner } from "../components/Spinner/Spinner";
import ReportService from "../services/ReportService";

export default function Report() {

    let { id } = useParams();
    const location = useLocation();

    const candidate = location.candidate;

    const [singleCandidateReports, setSingleCandidateReports] = useState([]);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    const loadSingleCandidateReports = useCallback(() => {
        ReportService.fetchSingleCandidateReports(id)
            .then(singleCandidateReports => setSingleCandidateReports(singleCandidateReports)).finally(() => { setIsLoading(false) });
    }, [id]);


    useEffect(() => {
        try {
            loadSingleCandidateReports();
        } catch (err) {
            setError(err.message);
            if (error.message === "Token expired") {
                window.location.replace("http://localhost:3000/login");
            }
        }
    }, [loadSingleCandidateReports, error.message]);

    if (isLoading) {
        return <Spinner />
    }

    if (!isLoading && error) {
        return <ErrorComponent />
    }

    return (
        <div>
            <CandidateDetails candidate={candidate} />
            <CandidateReports reports={singleCandidateReports} />
        </div>
    );
}