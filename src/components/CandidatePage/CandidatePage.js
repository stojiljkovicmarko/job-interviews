import React from "react";

import { useState } from "react";
import CandidateCard from "../CandidateCard/CandidateCard";
import SearchBar from "../SearchBar/SearchBar";

import "./CandidatePage.css";

function CandidatePage({ candidates }) {
  //console.log("from candidate page: ", candidates);

<<<<<<< HEAD
    //console.log("from candidate page: ", candidates);

    return (
        <div className="container">
            <div className="row">
                {candidates.map(candidate => {
                    if (candidate.name) {
                        return <CandidateCard className="card user-card" candidate={candidate} key={candidate.id} />
                    }
                })}
            </div>
        </div>
    );
=======
  const [searchText, setSearchText] = useState('');
  console.log("form cand page", searchText);

  return (
    <div className="container">
      <SearchBar searchText={searchText} setSearchText={setSearchText}  />
        <div className="row">
        {candidates.filter((candidate) => candidate.name.toLowerCase().includes(searchText.trim())
          // if (searchText === "") {
          //   return (
          //     <CandidateCard
          //       className="card user-card"
          //       // candidate={candidate}
          //       key={candidate.id}
          //     />
          //   );
          // } else if (candidate.name.toLowerCase().includes(searchText.toLowerCase())){
          //   return candidate;
          // }
        ).map ((candidate, index) => <CandidateCard className="card user-card" candidate={candidate} key={index} />)}
      </div>
    </div>
  );
>>>>>>> 7e117b3aacc99e617c6ea99115257453282f2d8e
}

export default CandidatePage;
