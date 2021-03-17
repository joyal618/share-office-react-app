import React from 'react'
import "./WorkSpace.css";
import Man from "../../assets/aryo-lahap-PVBanOUEU5U-unsplash.jpg";
import Icon1 from "../../assets/workspace.png";
import Icon2 from "../../assets/round-table.png";
import Icon3 from "../../assets/meeting.png";

export default function WorkSpace() {
    return (
        <div className="work-space-main-container">
            <h4>Find workspaces and solutions foryour business</h4>
            <h2>We Designed Spaces will make you fall in love with work again</h2>
            <h3 id="ws-caption-1">Contary to popular belief, Lorem Ipsum isnot simply random text. It has a roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old</h3>
            <div className="ws-sub-container">
                <div className="ws-caption-container">
                    <div className="ws-banner">
                        <img src={Icon1} alt="icon" width="60" height="auto"></img>
                        <h3>Hot Desk</h3>
                        <h4>Contary to popular belief, Lorem Ipsum isnot simply random text. It has a roots in a piece of classical Latin literature.</h4>
                    </div>
                    <div className="ws-banner">
                        <img src={Icon2} alt="icon" width="60" height="auto"></img>
                        <h3>Hot Desk</h3>
                        <h4>Contary to popular belief, Lorem Ipsum isnot simply random text. It has a roots in a piece of classical Latin literature.</h4>
                    </div>
                    <div className="ws-banner">
                        <img src={Icon3} alt="icon" width="60" height="auto"></img>
                        <h3>Hot Desk</h3>
                        <h4>Contary to popular belief, Lorem Ipsum isnot simply random text. It has a roots in a piece of classical Latin literature.</h4>
                    </div>

                </div>
                <div className="ws-image-container">
                    <img src={Man} alt="man" width="700" height="auto"></img>
                </div>
            </div>
        </div>
    )
}
