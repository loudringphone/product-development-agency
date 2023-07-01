import React, { useState } from "react";

import '../../styles/infocard.css'

const BigInfoCard = (props) => {
    const info = props.info
    return (
        <div className="biginfo__card">
            <div className="biginfo__left">
            <img src={info.image && info.image[0]?.downloadURL} alt={info.name} />
            </div>
            <div className="biginfo__right">
                <h1>{info.name}</h1>
                <h4>{info.title}</h4>
                <p>edsahjkdsakmxas</p>
            </div>
        </div>
    )

};

export default BigInfoCard;


