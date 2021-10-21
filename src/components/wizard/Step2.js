import { useState } from "react";

import SearchBar from "../SearchBar/SearchBar";

import "./steps.css"

export default function Step2({ companies, handleOnChange, prevStep, nextStep }) {

    const [searchText, setSearchText] = useState("");

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

                        <table className="table table-hover">
                            <tbody className="company-table">
                                {companies.filter(company => company.companyName.toLowerCase().includes(searchText))
                                    .map((company, index) => {
                                        return (<tr className="border company-row" 
                                        key={index} 
                                        onClick={() => { handleOnChange("company", company) }}>
                                            <td>
                                                <div className="text-muted">Company</div>
                                                <div className="m-0">{company.companyName}</div>
                                            </td>
                                            <td>
                                                <div className="text-muted">Email</div>
                                                <div className="m-0">{company.companyEmail}</div>
                                            </td>
                                        </tr>);
                                    })}
                            </tbody>
                        </table>


                    </div>

                    <div className="d-flex justify-content-between">
                        <button className="btn btn-dark" onClick={prevStep}>
                            Previous
                        </button>
                        <button className="btn btn-primary" onClick={nextStep}>
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}