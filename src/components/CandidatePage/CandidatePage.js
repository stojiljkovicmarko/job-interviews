import React from "react";

import { useState } from "react";
import CandidateCard from "../CandidateCard/CandidateCard";
import SearchBar from "../SearchBar/SearchBar";

import "./CandidatePage.css";

function CandidatePage({ candidates }) {

  const [searchText, setSearchText] = useState('');

  return (
    <div className="container">
      <SearchBar searchText={searchText} setSearchText={setSearchText} />
      <div className="row">
        {candidates.filter((candidate) => candidate.name.toLowerCase().includes(searchText.trim()))
          .map((candidate, index) => <CandidateCard className="card user-card" candidate={candidate} key={index} />)}
      </div>
    </div>
  );
}

export default CandidatePage;
