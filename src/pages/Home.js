import { useEffect, useState } from "react";

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
            HOME PAGE
            
        </div>
    );
}

export default Home;