import React, { useState } from "react";

import '../../styles/infocard.css'

const SmallInfoCard = (props) => {
    const info = props.info
    return (
        <div className="smallinfo__card">
            <div className="smallinfo__left">
            <img src={info.image && info.image[0]?.downloadURL} alt={info.name} />
            </div>
            <div className="smallinfo__right">
                <h2>{info.name}..</h2>
                <p>{info.description}</p>
            </div>
        </div>
    )

};

export default SmallInfoCard;


