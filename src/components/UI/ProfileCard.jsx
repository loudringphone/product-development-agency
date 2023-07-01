import React, { useState } from "react";
import '../../styles/profilecard.css'
import { Link, useLocation } from "react-router-dom";

const ProfileCard = (props) => {
    const person = props.person
    return (
        <div className="profile__card">
        <Link to={{ pathname: `${person.name.replace(' ','').toLowerCase()}` }}>

            <div className="profile_left">
                <img src={person.image && person.image[0]?.downloadURL} alt={person.name} />
            </div>
            <div className="profile_right">
                <h2>{person.name}</h2>
                <p>{person.description}</p>
            </div>
        </Link>
        </div>
    )

};

export default ProfileCard;


