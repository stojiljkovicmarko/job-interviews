import { useEffect, useState } from "react";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import CandidatePage from "../components/CandidatePage/CandidatePage";
import CandidateService from "../services/CandidateService";
import ErrorComponent from "../components/ErrorComponent/ErrorComponent";

function Home({onLogOut}) {

    const [candidates, setCandidates] = useState([]);
    const [error, setError] = useState("");

    const loadCandidates = () => {
        CandidateService.fetchAllCandidates().then(candidates => {
            setCandidates(candidates);
        });
    }

    useEffect(() => {
        try {
            loadCandidates();
        } catch(err) {
            setError(err.message);
        }
    }, []);

    if(error) {
        return <ErrorComponent />
    }

    return (
        <div>
            <Header onLogOut={onLogOut} />
            <CandidatePage candidates={candidates} />
            <Footer />
        </div>
    );
}

export default Home;
