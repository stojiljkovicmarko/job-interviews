import React from "react";

import CandidateCard from "../CandidateCard/CandidateCard";

import "./CandidatePage.css";

function CandidatePage({ candidates }) {

    //console.log("from candidate page: ", candidates);

    return (
        <div className="container">
            <div className="row">
            {candidates.map(candidate => {
                if (candidate.name) {
                    return <CandidateCard className="card user-card" candidate={candidate} key={candidate.id} />
                }
                
            })}
        </div>
        </div>
    );
}

export default CandidatePage;