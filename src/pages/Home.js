import { useEffect, useState } from "react";

import Header from "../components/Header/Header";
import CandidatePage from "../components/CandidatePage/CandidatePage";
import Footer from "../components/Footer/Footer";
import CandidateService from "../services/CandidateService";
import CompanyService from "../services/CompanyService";
import ReportService from "../services/ReportService";

function Home() {

    const [ candidates, setCandidates ] = useState([]);
    const [ companies, setCompanies ] = useState([]);
    const [ report, setReport ] = useState([]);


    const loadCandidates = () => {
        CandidateService.fetchAllCandidates().then(candidates => setCandidates(candidates));
    }

    const loadCompanies = () => {
        CompanyService.fetchAllCompanies().then(companies => setCompanies(companies));
    }

    const loadReport = () => {
        ReportService.fetchAllReportIds().then (report => setReport(report));
    }

    useEffect(() => {
        loadCandidates();
        loadCompanies();
        loadReport();
    }, []);

    console.log("form home: ", candidates); // Neoitreban deo
    console.log ('form-home:', report ); //Nepotreban deo
    
    return(
        <div>
                <CandidatePage candidates={candidates} />
            
        </div>
    );
}

export default Home;
