import React, { useState } from "react";



async function loginUser(credentials) {

    const url = "http://localhost:3333/login";

    const requestOptions = {
        method: "POST",
        headers: { "Content-type": "application/json"},
        body: JSON.stringify(credentials)
    }

    return fetch(url, requestOptions)
        .then(response => {
            if(response.status === 400) {
                alert("try again");
            }
            return response.json()
        })

}

function Login({ setToken }) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
 
    const emailHandler = (event) => {
        setEmail(event.target.value);
    }

    const passwordHandler = (event) => {
        setPassword(event.target.value);
    }

    const submitHandler = async (event) => {
        event.preventDefault();

        const user = {
            email: email,
            password: password
        }

        console.log(user);

        const token = await loginUser(user);
        setToken(token.accessToken);

    }

    return (
        <div>
            <h3> Login form </h3>
            <form>
                <input type="email" value={email} onChange={emailHandler} placeholder="Email" />
                <input type="text" value={password} onChange={passwordHandler} placeholder="Password" />
                <button onClick={submitHandler} type="submit"> SUBMIT </button>
            </form>

        </div>
    );
}



export default Login;