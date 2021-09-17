import React from "react";


import CandidateDetails from "../components/CandidatesReport/CandidateDetails";
import CandidateReports from "../components/CandidatesReport/CandidateReports";
import { useParams } from "react-router";

export default function Report() {

    let { id } = useParams();

    return(
        <div>
            <CandidateDetails id={id} />
            <CandidateReports id={id} />
        </div>
    );
}