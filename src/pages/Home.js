import { useEffect, useState } from "react";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import CandidateService from "../services/CandidateService";

function Home() {

    const [ candidates, setCandidates ] = useState([]);


    const loadCandidates = () => {
        CandidateService.fetchAllCandidates().then(candidates => setCandidates(candidates));
    }

    useEffect(() => {
        loadCandidates();
    }, []);

    console.log("form home: ", candidates);
    
    return(
        <div className="bg-primary">
            <Header />
                
            <Footer />
            
        </div>
    );
}

export default Home;
