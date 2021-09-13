import React from "react";

import { formatDate } from "../../utils/helperFunctions";

import "./CandidateDetails.css";

export default function CandidateDetails({name, dateOfBirth, email, education}) {

    const user = {
        name: "Marko Stojiljkovic",
        dateOfBirth: new Date(1990, 9, 5),
        email: "stojiljkovicmarko@yahoo.com",
        education: "MA Philogy Spanish language"
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4 p-1 div-img d-flex justify-content-center">
                    <img className="img-fluid" alt="" src="https://avataaars.io/?accessoriesType=Kurt&avatarStyle=Circle&clotheColor=Blue01&clotheType=Hoodie&eyeType=EyeRoll&eyebrowType=RaisedExcitedNatural&facialHairColor=Blonde&facialHairType=BeardMagestic&hairColor=Black&hatColor=White&mouthType=Sad&skinColor=Yellow&topType=ShortHairShortWaved"/>
                </div>
                <div className="col-md-8">
                    <div className="row div-details d-flex align-items-center h-50">
                        <div className="col-sm-6 w-50">
                            <p className="text-muted">Name: </p>
                            <h5 className="pl-3 my-2">{user.name}</h5>
                        </div>
                        <div className="col-sm-6 w-50">
                            <p className="text-muted">Date of birth: </p>
                            <h5 className="pl-3 my-2">{formatDate(user.dateOfBirth)}</h5>
                        </div>
                    </div>
                    <div className="row div-details d-flex align-items-center h-50">
                        <div className="col-sm-6 w-50">
                            <p className="text-muted">Email: </p>
                            <h5 className="pl-3 my-2 text-break">{user.email}</h5>
                        </div>
                        <div className="col-sm-6 w-50">
                            <p className="text-muted">Education: </p>
                            <h5 className="pl-3 my-2">{user.education}</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}