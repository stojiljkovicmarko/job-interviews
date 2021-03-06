import { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";

import "./steps.css";

export default function Step1({ candidates, handleOnChange, nextStep }) {

    const [searchText, setSearchText] = useState("");
    const [isCandidateSelected, setIsCandidateSelected] = useState(false);

    const addBorderToSelected = (id) => {
        let selectedCandidate = document.getElementById(id);
        let allCandDivs = document.getElementsByClassName("candidate");
        Array.from(allCandDivs).forEach(div => {
            div.classList.remove("borderActive");
        });
        selectedCandidate.classList.add("borderActive");
        setIsCandidateSelected(true);
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-3">
                    <div className="mb-4 currentStep">
                        <span>1</span> Select Candidate
                    </div>
                    <div className="mb-4">
                        <span>2</span> Select Company
                    </div>
                    <div className="mb-4">
                        <span>3</span> Fill Report Detail
                    </div>
                </div>
                <div className="candidate-div col-9 border-left border-dark p-4">
                    <div className="row d-flex mb-5">
                        <SearchBar searchText={searchText} setSearchText={setSearchText} />
                        <div className="row m-4 g-3">
                            {candidates.filter(candidate => candidate.name.toLowerCase().includes(searchText.trim()))
                                .map((candidate, index) => {
                                    return (
                                        <div className="d-flex col-12 col-lg-6 overflow-hidden candidate"
                                            key={index}
                                            id={candidate.id}
                                            onClick={() => { handleOnChange("candidate", candidate); addBorderToSelected(candidate.id) }}>
                                            <div className="cand-img">
                                                <img className="" src={candidate.avatar} alt="Avatar of candidate" />
                                            </div>
                                            <div className="p-2">
                                                <div>{candidate.name}</div>
                                                <div>{candidate.email}</div>
                                            </div>

                                        </div>
                                    );
                                })}
                        </div>
                    </div>
                    <div className="d-flex justify-content-end">
                        <button className={isCandidateSelected ? "btn btn-primary" : "btn btn-secondary"} disabled={!isCandidateSelected} onClick={nextStep}>
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}