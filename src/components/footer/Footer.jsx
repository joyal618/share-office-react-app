import React from 'react'
import "./Footer.css";
import DotPattern from "../../assets/dot-pattern-cr.png";
import Logo from '../../assets/briefcase.svg'
import Woman from '../../assets/23b6afa1e67046d7e916e58930630e40';
import Image1 from '../../assets/a21f561644992c270e1da55635e61cfa';
import Image2 from '../../assets/c0a8a397fa99e4aa0b5d78cebee4fcae';
import Image3 from '../../assets/ed33a357cbaf68dbb6097458066bf809';
import Image4 from '../../assets/18e79a0a7b730c0725f0ad435a7b6813';
 

export default function Footer() {
    return (
        <div className="footer-main-container">

            <div className="footer-grid-container">
                <img id="footer-image1" src={Image1} alt="image1" width="400" height="auto"></img>
                <img id="footer-image2" src={Image2} alt="image2" width="350" height="auto"></img>
                <img id="footer-image3" src={Image3} alt="image2" width="300" height="auto"></img>
                <img id="footer-image4" src={Image4} alt="image3" width="300" height="auto"></img>
                <div id="div1"></div>
                <div id="div2"></div>
                <div id="div3"></div>
            </div>

            <div className="footer-sub-container">
                <div className="footer-sub-container1">
                    <div className="footer-brand-container">
                        <div className="footer-logo-container">
                            <img src={Logo} alt="logo" height="40" width="auto"></img>
                            
                        </div>
                        <div className="footer-brand-name">
                            <h2>Share Office</h2>
                            <div>Business slogan here</div>
                        </div>
                    </div>
                    <div id="footer-woman">
                        <img src={Woman} alt="imag1"></img>
                    </div>
                    <div className="footer-dot-pattern">
                        <img src={DotPattern} alt="pattern" width="250" height="auto"></img>
                    </div>
                </div>
                <div className="footer-sub-container2">
                    <footer className="footer-content-wrapper">
                        <div className="footer-content">
                            <h2>How to Find Us</h2>
                            <address>2nd Floor, Trust Building, Kayyath Ln<br/>Palarivattom, Kochi, Kerala 682025</address>
                            <i>+41 234324234234</i>
                            <i>meet@shareoffice.com</i>
                            <i>www.shareoffice.com</i>
                        </div>
                        <div className="footer-content" id="content2">
                            <h2>Comapany</h2>
                            <div></div>
                                <li>Home</li>
                                <li>About Company</li>
                                <li>Contact Us</li>
                        </div>
                        <div className="footer-content" id="content3">
                            <h2> </h2>
                            <li>Privacy & Policy</li>
                            <li>Support</li>
                            <li>Terms and Conditions</li>
                        </div>
                    </footer>
                    <div className="footer-copyright">
                        Copyright @ 2021 Share Office
                    </div>
                </div>
            </div>


        </div>
    )
}


// {/* <div className="footer-sub-container"> </div>
//             <div className="footer-dot-pattern"><img src={DotPattern} alt="pattern" width="300" height="auto"></img></div>
//             <footer className="footer-content-container">
//                 <div className="footer-content">
//                     <address>2nd Floor, Trust building, Kayyath</address>
//                 </div>
//                 <div className="footer-content">

//                 </div>
//                 <div className="footer-content">

//                 </div>
//             </footer> */}