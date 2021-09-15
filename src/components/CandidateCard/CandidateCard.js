import React from "react";

import { AvatarGenerator } from "random-avatar-generator";

import "./CandidateCard.css";

function CandidateCard(props) {

    const { id, name, birthday, avatar, email, education } = props.candidate;

    const generator = new AvatarGenerator();

    const avatarToDisplay = generator.generateRandomAvatar();

    const cardClickHandler = () => {
        alert(name);
    }

    return (

        <>
            <div className="card col-4 pt-2 mb-2">

                <button className="stil" onClick={cardClickHandler}>
                    <img className="card-img" src={avatarToDisplay} alt="" />
                    <h4 className="card-text color-dark my-2"> {name} </h4>
                    <p className="text-muted"> {email} </p>
                </button>

            </div>
        </>

    );
};

export default CandidateCard;
