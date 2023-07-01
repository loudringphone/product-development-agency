import React, { useState, useEffect } from 'react'
import { Helmet } from "../components/helmet/Helmet";
import ScrollText from '../components/UI/ScrollText';
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
        setPeople(newData);})
    }

    useEffect(()=>{
    fetchPeople();
    }, [])





    return (
        <div>
            <Helmet title={"Home"}>
                <ScrollText />
                <Showcase items={people}/>
            </Helmet>
        </div>
    )

}

export default Home;