import { useState } from "react";

import SearchBar from "../SearchBar/SearchBar";

import "./steps.css"

export default function Step2({ companies, handleOnChange, prevStep, nextStep }) {

    const [searchText, setSearchText] = useState("");
    const [isCompanySelected, setIsCompanySelected] = useState(false);

    const addBorderToSelected = (id) => {
        let selectedCompany= document.getElementById(id);
        let allCompDivs = document.getElementsByClassName("company");
        Array.from(allCompDivs).forEach(div => {
            div.classList.remove("borderActive");
        });
        selectedCompany.classList.add("borderActive");
        setIsCompanySelected(true);
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-3">
                    <div className="mb-4 ">
                        <span>1</span> Select Candidate
                    </div>
                    <div className="mb-4 currentStep">
                        <span>2</span> Select Company
                    </div>
                    <div className="mb-4">
                        <span>3</span> Fill Report Detail
                    </div>
                </div>
                <div className="candidate-div col-9 border-left border-dark p-4">
                    <div className="row d-flex mb-5">
                        <SearchBar searchText={searchText} setSearchText={setSearchText} />

                        <div className="container">
                        <div className="row row-wrapper">
                            {companies.filter(company => company.companyName.toLowerCase().includes(searchText.trim()))
                            .map((company, index) => {
                                return (
                                    <div className="col-12 company"
                                    id={company.companyId} 
                                    key={index}
                                    onClick={() => { handleOnChange("company", company); addBorderToSelected(company.companyId) }}
                                    >
                                        <div className="row singlerow-wrapper py-2 mb-1 ">
                                            <div className="col-4">
                                                <div className="text-muted">Company</div>
                                                <div className="m-0 company-info">{company.companyName}</div>
                                            </div>
                                            <div className="col-4">
                                                <div className="text-muted">Email</div>
                                                <div className="m-0 company-info">{company.companyEmail}</div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}

                        </div>
                        </div>


                    </div>

                    <div className="d-flex justify-content-between">
                        <button className="btn btn-dark" onClick={prevStep}>
                            Previous
                        </button>
                        <button className={isCompanySelected ? "btn btn-primary" : "btn btn-secondary"} disabled={!isCompanySelected} onClick={nextStep}>
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}