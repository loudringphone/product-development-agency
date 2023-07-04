import React, { useState } from "react";
import '../../styles/profilecard.css'
import { Link, useLocation } from "react-router-dom";
import '../../styles/team.css'

const TeamCard = (props) => {
    const people = props.people
    return (
        <div className='team'>

        {
            people?.map((person, i) => (
                <Link to={`/people/${person.name.replace(' ','').toLowerCase()}`}>
                <img src={person.image && person.image[0]?.downloadURL} alt={person.name} />
                <p style={{ textDecoration: 'underline' }}>{person.name}</p>
                <p>{person.title}</p>
                </Link>
            ))
        }
       </div>
    )

};

export default TeamCard;


