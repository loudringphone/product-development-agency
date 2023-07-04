import React, { useState, useEffect } from 'react'
import { Helmet } from "../components/helmet/Helmet";
import ScrollText from '../components/UI/ScrollText';
import Purpose from '../components/UI/PurposeCard';
import Approach from '../components/UI/Approach';
import Works from '../components/UI/Works';
import TeamCard from '../components/UI/TeamCard';
import Showcase from "../components/UI/Showcase"
import { collection, query, getDocs } from "firebase/firestore";
import {db} from "../firebase_setup/firebase"

const Home = () => {
    const [people, setPeople] = useState([]);
    const fetchPeople = async () => {
    const q = query(collection(db, "people"))
    await getDocs(q)
    .then((querySnapshot) => {
        const newData = querySnapshot.docs
                .map((doc) => ({ ...doc.data(), id: doc.id }))
        shuffleArray(newData);
        setPeople(newData);})
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
            <Helmet title={"Home"}>
                <div className='content'>
                    <ScrollText />
                    <Purpose />
                    <Approach />
                </div>
                <Works />
                <div className='content'>
                <div className="team__content">
                        <div className="team__left">
                    <h1 className='team-title'>Meet our Team</h1>
                    <p>Together, we defined our brand, designed and built the site during a 48 hour collabathon with a frontend and backend, using ReactJS, Firebase, Rowy and Figma.</p>
                    </div>
                    <div className="team__right">
                        <TeamCard people={people}/>
                    </div>
                        
                    
                </div>
                    <div className='team__showcase'>
                <Showcase rtl={false} items={people}/>
                </div>
                </div>

            </Helmet>
    )

}

export default Home;