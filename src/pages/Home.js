import { useEffect, useState } from "react";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import CandidateService from "../services/CandidateService";
import CompanyService from "../services/CompanyService";
import ReportService from "../services/ReportService";

function Home() {

    const [ candidates, setCandidates ] = useState([]);
    const [ company, setCompany ] = useState([]);
    const [ report, setReport ] = useState([]);


    const loadCandidates = () => {
        CandidateService.fetchAllCandidates().then(candidates => setCandidates(candidates));
    }

    const loadCompany = () => {
        CompanyService.fetchAllCompanyIds().then (company => setCompany(company));
    }

    const loadReport = () => {
        ReportService.fetchAllReportIds().then (report => setReport(report));
    }

    useEffect(() => {
        loadCandidates();
        loadCompany();
        loadReport();
    }, []);

    console.log("form home: ", candidates); // Neoitreban deo
    console.log ('form-home:', company ); //Nepotreban deo
    console.log ('form-home:', report ); //Nepotreban deo
    
    return(
        <div className="bg-primary">
            <Header />
                
            <Footer />
            
        </div>
    );
}

export default Home;
