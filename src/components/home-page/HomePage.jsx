import React from 'react'
import "./HomePage.css";
import DotPattern from "../../assets/dot-pattern.png";
import Man from "../../assets/man.jpg";
import Image1 from "../../assets/73bbc30690e011df60c4bc8835d417c9"

export default function HomePage() {
    return (
        <div className="home-page-main-container">
            <div className="home-page-sub-container">
                <div className="home-page-caption-container">
                    <div className="hp-caption-container">
                        <h1>Comfortable Coworking Space</h1>
                        <h4>There are many variatons of passages of Lorem Ipsum available, but the majority have suffered alteration in some form</h4>
                        <h4>Read More</h4>
                    </div>
                </div>
                <div className="home-page-image-container">
                    <div className="hp-dot-pattern-container">
                        <img src={DotPattern} alt="pattern" width="300" height="auto"></img>
                    </div>
                    <div className="hp-man-image">
                        <img src={Man} alt="man" width="450" height="auto"></img>
                    </div>
                    <div className="hp-solid-container"></div>
                </div>
            </div>
            <div>
                <img src={Image1} alt="image1" width="100%" height="auto"></img>
            </div>
        </div>
    )
}
