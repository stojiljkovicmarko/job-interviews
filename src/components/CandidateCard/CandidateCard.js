import React from "react";

import { AvatarGenerator } from "random-avatar-generator";

import "./CandidateCard.css";
import { Link } from "react-router-dom";

function CandidateCard(props) {
  const { id, name, birthday, avatar, email, education } = props.candidate;

  const generator = new AvatarGenerator();

  const avatarToDisplay = generator.generateRandomAvatar();

  // zamotamo karticu u button tag
  // const cardClickHandler = () => {
  //     alert(name);
  // }

  return (
    <div className="gutter">
      <div className="card text-center scale pt-2 mb-2">
        <Link to={"candidate-report/" + id} state={{ name: name }}>
          <img className="card-img" src={avatarToDisplay} alt="" />
          <h4 className="card-text color-dark my-2"> {name} </h4>
          <p className="text-muted"> {email} </p>
        </Link>
      </div>
    </div>
  );
}

export default CandidateCard;
