import React from "react";

import { formatDate } from "../../utils/helperFunctions";

import "./CandidateDetails.css";

export default function CandidateDetails({ id }) {

    const array = [
        {
            "id": 56479186,
            "name": "Declan Schaden",
            "birthday": "Sun Jan 31 2021 19:56:57 GMT+0100 (Central European Standard Time)",
            "email": "Emilia.Veum@hotmail.com",
            "education": "Specialist"
        },
        {
            "id": 54493806,
            "name": "Tiffany Lynch",
            "birthday": "Fri Mar 19 2021 23:14:47 GMT+0100 (Central European Standard Time)",
            "email": "Rosalyn.Marquardt98@hotmail.com",
            "education": "Director",
            "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/albertaugustin/128.jpg"
        },
        {
            "id": 84705028,
            "name": "Cade Hammes",
            "birthday": "Mon May 03 2021 23:06:48 GMT+0200 (Central European Summer Time)",
            "email": "Stefanie.Reilly12@hotmail.com",
            "education": "Agent",
            "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/osmanince/128.jpg"
        },
        {
            "id": 38097373,
            "name": "Raul Donnelly",
            "birthday": "Fri Nov 20 2020 11:46:47 GMT+0100 (Central European Standard Time)",
            "email": "Oscar.Schimmel@yahoo.com",
            "education": "Assistant",
            "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/AM_Kn2/128.jpg"
        },
        {
            "id": 57835921,
            "name": "Aisha Dare",
            "birthday": "Fri Feb 19 2021 14:12:48 GMT+0100 (Central European Standard Time)",
            "email": "Loma.Bayer57@yahoo.com",
            "education": "Representative"
        },
        {
            "id": 84852310,
            "name": "Rosalyn Batz DDS",
            "birthday": "Tue Aug 10 2021 07:58:05 GMT+0200 (Central European Summer Time)",
            "email": "Frederik_DAmore@gmail.com",
            "education": "Technician"
        },
        {
            "id": 84815318,
            "name": "John May",
            "birthday": "Tue Aug 11 2000 07:08:05 GMT+0200 (Central European Summer Time)",
            "email": "john.may@gmail.com",
            "education": "Technician"
        }
    ] 

    return (
        <>
            {array.map(candidate => {
                if (candidate.id === parseInt(id)) {
                    return (<div className="container" key={candidate.id}>
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