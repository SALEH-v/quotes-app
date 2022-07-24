import React from "react";
import { useNavigate } from "react-router-dom";


//   import 'bootstrap/dist/css/bootstrap.css';
//   import 'bootstrap'


const Login = () => {

    const userA = 'USER A'

    const userB = 'USER B'

    const navigate = useNavigate();

    const handleUserA = () => {
        navigate(`/home/${userA}`)
    }

    const handleUserB = () => {
        navigate(`/home/${userB}`)
    }

    return (
        <div className="loginpage-container">
            <h2 className="users-h2">Choose a user to login: </h2>
            <div className="users-container">
                <div className="user-a-container" onClick={handleUserA}>
                    <i className="material-symbols-outlined">account_box </i>
                    <p>{userA}</p>
                </div>
                <div className="user-b-container" onClick={handleUserB}>
                    <i className="material-symbols-outlined">account_box</i>
                    <p>{userB}</p>
                </div>
            </div>
        </div>

    )


}

export default Login;