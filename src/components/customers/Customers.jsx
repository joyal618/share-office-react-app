import React from 'react'
import "./Customers.css";
import Image1 from "../../assets/7048bd8f090c22c67267a0c160485219";
import Image2 from "../../assets/0e96853af37785996dfc7b822aa6e0b5";
import Image3 from "../../assets/17fae23e2bcf0c5f9b392c0846d189e6";
import Image4 from "../../assets/23b6afa1e67046d7e916e58930630e40";



export default function Customers() {
    return (
        <div className="customers-main-container">
            <h3>Testimonials and Reviews from our customers</h3>
            <h2>What our customers are saying about us</h2>
            <div className="customers-banner-container">
                <div className="customers-banner" id="banner-up">
                    <div className="customers-banner-image" >
                        <img src={ Image1 } alt="alt" width="150" height="auto"></img>
                    </div>
                    <h3>Elois Smith</h3>
                    <h4>Lorem Ipsum is simply dummy text ofthe printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s'</h4>
                    <h4>Lorem Ipsum has been the industry's</h4>
                </div>
                <div className="customers-banner" >
                <div className="customers-banner-image">
                        <img src={ Image2 } alt="alt" width="150" height="auto"></img>
                    </div>
                <h3>Elois Smith</h3>
                    <h4>Lorem Ipsum is simply dummy text ofthe printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s'</h4>
                    <h4>Lorem Ipsum has been the industry's</h4>
                </div>
                <div className="customers-banner" id="banner-up">
                <div className="customers-banner-image">
                        <img src={ Image3 } alt="alt" width="150" height="auto"></img>
                    </div>
                <h3>Elois Smith</h3>
                    <h4>Lorem Ipsum is simply dummy text ofthe printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s'</h4>
                    <h4>Lorem Ipsum has been the industry's</h4>
                </div>
                <div className="customers-banner">
                <div className="customers-banner-image">
                        <img src={ Image4 } alt="alt" width="150" height="auto"></img>
                    </div>
                <h3>Elois Smith</h3>
                    <h4>Lorem Ipsum is simply dummy text ofthe printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s'</h4>
                    <h4>Lorem Ipsum has been the industry's</h4>
                </div>
            </div>
        </div>
    )
}
