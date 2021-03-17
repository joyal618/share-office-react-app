import React from 'react'
import "./CoWorker.css";
import Mobile from "../../assets/6eb8ec08b0953d93a5ca92680b5fb14b";
import DotPattern from "../../assets/dot-pattern.png";



export default function CoWorker() {
    return (
        <div className="co-worker-main-container">
            <div className="co-worker-sub-container">
                <div className="cw-caption-container">
                    <h3>What is</h3>
                    <h2>Coworker?</h2>
                    <h4>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.<br/> <br/> All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. </h4>
                </div>
                <div className="cw-mobile-image">
                    <img src={Mobile} alt="mobile" width="400" height="auto"></img>
                </div>
            </div>
            <img src={DotPattern} alt="pattern" width="300" height="auto"></img>
        </div>
    )
}
