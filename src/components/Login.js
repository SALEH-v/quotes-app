import React from "react";

//   import 'bootstrap/dist/css/bootstrap.css';
//   import 'bootstrap'


const Login = () => {

    return (
        <div className="loginpage-container">
            <h2 className="users-h2">Choose a user to login: </h2>
            <div className="users-container">
                <div className="user-a-container">
                    <i className="material-symbols-outlined">account_box </i>
                    <p>USER A</p>
                </div>
                <div className="user-b-container">
                    <i className="material-symbols-outlined">account_box</i>
                    <p>USER B</p>
                </div>
            </div>
        </div>

    )


}

export default Login;