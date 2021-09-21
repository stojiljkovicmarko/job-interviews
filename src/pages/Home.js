import { useEffect, useState } from "react";

import CandidatePage from "../components/CandidatePage/CandidatePage";
import CandidateService from "../services/CandidateService";

function Home() {

    const [candidates, setCandidates] = useState([]);

    const loadCandidates = () => {
        CandidateService.fetchAllCandidates().then(candidates => {
            setCandidates(candidates);
        });
    }

    useEffect(() => {
        loadCandidates();
    }, []);

    return (
        <div>
            <CandidatePage candidates={candidates} />
        </div>
    );
}

export default Home;
