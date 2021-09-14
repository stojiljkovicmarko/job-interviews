import React from "react";
import "./CandidateCard.css";

function CandidateCard (props) {
/*    const { name, email. date, education } = props;
    dole pises {props.name}
*/
    return (
        <div className="card col-4 pt-2 mb-2">
            <img className="card-img" src="https://avataaars.io/?accessoriesType=Kurt&avatarStyle=Circle&clotheColor=Blue01&clotheType=Hoodie&eyeType=EyeRoll&eyebrowType=RaisedExcitedNatural&facialHairColor=Blonde&facialHairType=BeardMagestic&hairColor=Black&hatColor=White&mouthType=Sad&skinColor=Yellow&topType=ShortHairShortWaved" alt="" />
            <p className ="card-text">Name: Nevena </p>
            <p> Email: nevena@nevena.com </p>
            <p> Date: 09.09.2021. ovo je datum</p>
        </div>
    );
};

export {CandidateCard};
