import React, { useEffect, useState } from "react";
import CandidateService from "../../services/CandidateService";

import { formatDate } from "../../utils/helperFunctions";

import "./CandidateDetails.css";

export default function CandidateDetails({ id }) {


    const [ candidates, setCandidates ] = useState([]);

    const loadCandidates = () => {
        CandidateService.fetchAllCandidates().then(candidate => setCandidates(candidate));
    }

    useEffect(() => {
        loadCandidates();
    }, []);

    return (
        <>
            {candidates.map(candidate => {
                if (candidate.id === parseInt(id)) {
                    return (<div className="container">
                        <div className="row">
                            <div className="col-md-4 p-1 div-img d-flex justify-content-center">
                                <img className="img-fluid" alt="" src="https://avataaars.io/?accessoriesType=Kurt&avatarStyle=Circle&clotheColor=Blue01&clotheType=Hoodie&eyeType=EyeRoll&eyebrowType=RaisedExcitedNatural&facialHairColor=Blonde&facialHairType=BeardMagestic&hairColor=Black&hatColor=White&mouthType=Sad&skinColor=Yellow&topType=ShortHairShortWaved" />
                            </div>
                            <div className="col-md-8">
                                <div className="row div-details d-flex align-items-center h-50">
                                    <div className="col-sm-6 w-50">
                                        <p className="text-muted">Name: </p>
                                        <h5 className="pl-3 my-2">{candidate.name}</h5>
                                    </div>
                                    <div className="col-sm-6 w-50">
                                        <p className="text-muted">Date of birth: </p>
                                        <h5 className="pl-3 my-2">{formatDate(candidate.birthday)}</h5>
                                    </div>
                                </div>
                                <div className="row div-details d-flex align-items-center h-50">
                                    <div className="col-sm-6 w-50">
                                        <p className="text-muted">Email: </p>
                                        <h5 className="pl-3 my-2 text-break">{candidate.email}</h5>
                                    </div>
                                    <div className="col-sm-6 w-50">
                                        <p className="text-muted">Education: </p>
                                        <h5 className="pl-3 my-2">{candidate.education}</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>);
                }
            })}
        </>
    );
}