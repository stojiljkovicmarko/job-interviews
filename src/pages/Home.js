import { useEffect, useState } from "react";

import Header from "../components/Header/Header";
import CandidatePage from "../components/CandidatePage/CandidatePage";
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

    return(
        <div>
            <Header className="bg-primary" />
                <CandidatePage candidates={candidates} />
            <Footer />
            
        </div>
    );
}

export default Home;
