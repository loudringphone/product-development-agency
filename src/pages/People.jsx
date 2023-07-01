import React, { useState, useEffect } from 'react'
import { Helmet } from "../components/helmet/Helmet";
import { collection, query, getDocs } from "firebase/firestore";
import {db} from "../firebase_setup/firebase"

import ProfileCard from "../components/UI/ProfileCard"

import '../styles/people.css'

const People = () => {
    const [people, setPeople] = useState([]);
    const fetchPeople = async () => {
        const q = query(collection(db, "people"));
        const querySnapshot = await getDocs(q);
        const newData = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        shuffleArray(newData);
        setPeople(newData);
    }
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }
    useEffect(()=>{
    fetchPeople();
    }, [])

    return (
        <Helmet title={"People"}>
        <div className='content'>
            <div className='people'>

                {
                    people?.map((person, i) => (
                        <ProfileCard key={i} person={person}/>
                    ))
                }
            </div>
        </div>
        </Helmet>

    )

}

export default People;