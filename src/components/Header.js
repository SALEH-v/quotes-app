import React from "react";
import logo from '../images/jerry-ubah-logo2.png'
import { useNavigate } from "react-router-dom";



const Header = () => {

    const navigate = useNavigate();

    const logout = (e) => {
        e.preventDefault();

        navigate('/login')
    }


    return (

        <div className="header-contaner">
            <header>
                <div className="logo-container">
                    <img src={logo} alt="logo"/>
                </div>

                <div>
                    <h2 id="website-name">Quotes website</h2>
                </div>

                <div className="header-username">
                    <p>SS</p>
                    <div className="logout-container">
                        <button id="logout-button" onClick={logout}>Logout</button>
                    </div>
                </div>
            </header>
        </div>
        


    )


}

export default Header;

