import React from "react";

import CandidateDetails from "../components/Candidates/CandidateDetails";
import CandidateReports from "../components/Candidates/CandidateReports";

export default function Report() {

    return(
        <div>
            <CandidateDetails />
            <CandidateReports />
        </div>
    );
}