import React from "react";

import ErrorComponent from "../ErrorComponent/ErrorComponent";
import { formatDate } from "../../utils/helperFunctions";

import "./CandidateDetails.css";

export default function CandidateDetails({ candidate }) {

  
  if(!candidate) return <ErrorComponent errorMessage={"No information on requested candidate"} />

  return (
    <div className="container" key={candidate.id}>
      <div className="row">
        <div className="col-md-4 p-1 div-img d-flex justify-content-center">
          <img
            className="img-fluid"
            alt=""
            src={candidate.avatar}
          />
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
    </div>
  );
}
