import React from "react";
import { Link } from 'react-router-dom';

import '../../styles/infocard.css'

const SmallInfoCard = (props) => {
    const info = props.info
    return (
        <div className="smallinfo__card">
            <div className="smallinfo__left">
            <Link to={info.url}>
                <img src={info.image && info.image[0]?.downloadURL} alt={info.name} />
            </Link>
            </div>
            <div className="smallinfo__right">
                <h2>{info.name}</h2>
                {info.type?
                    <h3>{info.type}</h3>
                    :
                    <></>
                 }
                
                <p>{info.description}</p>
            </div>
        </div>
    )

};

export default SmallInfoCard;


