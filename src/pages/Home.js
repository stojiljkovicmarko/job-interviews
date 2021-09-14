import { useEffect, useState } from "react";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import CandidateService from "../services/CandidateService";
import CompanyService from "../services/CompanyService";

function Home() {

    const [ candidates, setCandidates ] = useState([]);
    const [ company, setCompany ] = useState([]);


    const loadCandidates = () => {
        CandidateService.fetchAllCandidates().then(candidates => setCandidates(candidates));
    }

    const loadCompany = () => {
        CompanyService.fetchAllCompanyIds().then (company => setCompany(company));
    }

    useEffect(() => {
        loadCandidates();
        loadCompany();
    }, []);

    console.log("form home: ", candidates); // Neoitreban deo
    console.log ('form-home:', company ); //Nepotreban deo
    
    return(
        <div className="bg-primary">
            <Header />
                
            <Footer />
            
        </div>
    );
}

export default Home;
