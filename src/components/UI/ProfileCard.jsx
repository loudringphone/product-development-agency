import React, { useState } from "react";
import '../../styles/profilecard.css'

const ProfileCard = (props) => {
    const person = props.person
    return (
        <div className="profile__card">
            <div className="profile_left">
                <img src={person.image && person.image[0]?.downloadURL} alt={person.name} />
            </div>
            <div className="profile_right">
                <h2>{person.name}</h2>
            </div>
        </div>
    )

};

export default ProfileCard;


