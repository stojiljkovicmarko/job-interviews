import React from "react"

export default function Error( {errorMessage} ) {

    if(!errorMessage) {
        errorMessage = "Something went wrong";
    }

    return(
        <div className="container mx-auto text-center p-3 m-3 alert alert-info">
            <h1>{errorMessage}</h1>
        </div>
    );
}