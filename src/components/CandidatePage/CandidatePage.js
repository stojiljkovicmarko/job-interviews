import React from "react";

import { useState } from "react";
import CandidateCard from "../CandidateCard/CandidateCard";
import SearchBar from "../SearchBar/SearchBar";

import "./CandidatePage.css";

function CandidatePage({ candidates }) {
  //console.log("from candidate page: ", candidates);

  const [searchText, setSearchText] = useState('');
  console.log("form cand page", searchText);

  return (
    <div className="container">
      <SearchBar searchText={searchText} setSearchText={setSearchText}  />
        <div className="row">
        {candidates.filter((candidate) => {
          if (searchText === "") {
            return (
              <CandidateCard
                className="card user-card"
                candidate={candidate}
                key={candidate.id}
              />
            );
          } else if (candidate.name.toLowerCase().includes(searchText.toLowerCase())){
            return candidate;
          }
        }).map ((candidate, index) => <CandidateCard className="card user-card" candidate={candidate} key={index} />)}
      </div>
    </div>
  );
}

export default CandidatePage;
