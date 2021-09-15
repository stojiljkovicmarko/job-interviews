import { useEffect, useState } from "react";

import Header from "../components/Header/Header";
import CandidatePage from "../components/CandidatePage/CandidatePage";
import Footer from "../components/Footer/Footer";
import CandidateService from "../services/CandidateService";
import CompanyService from "../services/CompanyService";

function Home() {

    const [ candidates, setCandidates ] = useState([]);
    const [ companies, setCompanies ] = useState([]);


    const loadCandidates = () => {
        CandidateService.fetchAllCandidates().then(candidates => setCandidates(candidates));
    }

    const loadCompanies = () => {
        CompanyService.fetchAllCompanies().then(companies => setCompanies(companies));
    }

    useEffect(() => {
        loadCandidates();
        loadCompanies();
    }, []);

    console.log("from home: ", candidates);
    
    return(
        <div>
            <Header className="bg-primary" />
                <CandidatePage candidates={candidates} />
            <Footer />
            
        </div>
    );
}

export default Home;
