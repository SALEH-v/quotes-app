import React from "react";


const Footer = () => {

    
    return (

        <footer>
            <div className="footer-container">
                <div className="contact-container">
                    <h3 id="contact-h3">Contact</h3>
                    <ul className="contact-list">
                        <li className="contact-items">
                            <span className="material-symbols-outlined">call</span> +966530255255
                        </li>
                        <li className="contact-items">
                            <span className="material-symbols-outlined">mail</span> saldobayi.t@solutions.com.sa
                        </li>
                    </ul>
                </div>

                <div className="footer-line"></div>

                <div className="footer-end">
  
                    <p className="ptf">PRIVACY POLICY</p>
                    <p className="ptf">TERMS OF USE</p>
                    <p className="ptf">FAQ</p>
                    <span className="material-symbols-outlined" id="star">stars</span>
                    <p id="copyright">Copyright © 2022, All Right Reserved by Saleh.</p>

                </div>
                
            </div>
        </footer>
        
    )
}

export default Footer;