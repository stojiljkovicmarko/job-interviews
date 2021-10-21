import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import CandidateService from "../../services/CandidateService";
import CompanyService from "../../services/CompanyService";
import { Spinner } from "../Spinner/Spinner";
import HeaderAdmin from "../admin/HeaderAdmin/HeaderAdmin";
import ReportService from "../../services/ReportService";

export default function CreateReport() {

    let history = useHistory();
    const [candidates, setCandidates] = useState({});
    const [companies, setCompanies] = useState({});
    //object of report
    const [report, setReport] = useState({});
    const [step, setStep] = useState(1);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);


    //proceed to next step
    const nextStep = () => {
        setStep(step + 1);
    }

    //back to previous step
    const prevStep = () => {
        setStep(step - 1);
    }

    const handleOnChange = (property, value) => {
        setReport((prevState) => ({ ...prevState, [property]: value }));
        console.log("this is a report:", report);
    }

    //function to submit the data collected
    const submitReport = () => {
        console.log("KONACNI REPORT: ", report);
        ReportService.createReport(report).
            then(response => {
                console.log(response);
                if (response.ok) {
                    console.log("all ok");
                    history.push("/reports");
                } else {
                    console.log("not all ok");
                }
        })
    }

    const loadCandidates = () => {
        CandidateService.fetchAllCandidates()
            .then(candidates => setCandidates(candidates))
            .finally(() => setIsLoading(false));
    }

    const loadCompanies = () => {
        CompanyService.fetchAllCompanies()
            .then(companies => setCompanies(companies))
            .finally(() => setIsLoading(false));
    }

    useEffect(() => {
        loadCandidates();
        loadCompanies();
    }, []);


    if (isLoading) {
        return <Spinner />
    }

    const renderCurrentStep = (step) => {
        switch (step) {
            case 1:
                return <Step1 candidates={candidates} handleOnChange={handleOnChange} nextStep={nextStep} />
            case 2:
                return <Step2 companies={companies} handleOnChange={handleOnChange} prevStep={prevStep} nextStep={nextStep} />
            case 3:
                return <Step3 handleOnChange={handleOnChange} submitReport={submitReport} prevStep={prevStep} />
        }
    }

    return (
        <>
            <HeaderAdmin />
            {renderCurrentStep(step)}
        </>
    );
}