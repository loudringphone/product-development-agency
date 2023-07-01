import React, { useState, useEffect } from 'react'
import { Helmet } from "../components/helmet/Helmet";
import ScrollText from '../components/UI/ScrollText';
import Purpose from '../components/UI/PurposeCard';
import Approach from '../components/UI/Approach';
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
        <div className='content'>
            <Helmet title={"Home"}>
                <ScrollText />
                <Purpose />
                <Approach />
                <Showcase rtl={false} items={people}/>
            </Helmet>
        </div>
    )

}

export default Home;