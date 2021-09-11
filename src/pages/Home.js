import { useEffect, useState } from "react";

import CandidateService from "../services/CandidateService";
import CompanyService from "../services/CompanyService";

function Home() {

    const [ candidates, setCandidates ] = useState([]);
    const [ companies, setCompanies ] = useState([]);


    const loadCandidates = () => {
        CandidateService.fetchAllCandidates().then(candidates => setCandidates(candidates));
    }

    const loadCompanies = () => {
        CompanyService.fetchAllCompaniesIds().then (companies => setCompanies(companies));
    }

    useEffect(() => {
        loadCandidates();
        loadCompanies();
    }, []);

    console.log("form home: ", candidates);
    
    return(
        <div className="bg-primary">
            HOME PAGE
            
        </div>
    );
}

export default Home;