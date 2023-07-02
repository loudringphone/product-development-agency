import React, { useState, useEffect } from 'react'
import { Helmet } from "../components/helmet/Helmet";
import { collection, query, where, getDocs, documentId } from "firebase/firestore";
import {db} from "../firebase_setup/firebase"
import { useLocation } from 'react-router-dom';
import ProfileCard from "../components/UI/ProfileCard"

import '../styles/people.css'

const Result = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const searchQuery = searchParams.get('q');
    const searchArray = searchQuery.toLowerCase().split(' ')
    const [projects, setProjects] = useState([]);
    const [searchPeople, setSearchPeople] = useState([]);
    const [people, setPeople] = useState([]);

    const fetchProjects = async () => {
        const q = query(collection(db, "projects"), where("searchArray", "array-contains", searchArray[0]))
        const querySnapshot = await getDocs(q);
        const newData = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        setProjects(newData);
        setSearchPeople(Array.from(new Set(newData.map(project => project.creator))));

    }
    useEffect(()=>{
    fetchProjects();
    }, [])
    
    const fetchPeople = async () => {
        const q = query(collection(db, "people"), where(documentId(), "in", searchPeople))
        const querySnapshot = await getDocs(q);
        const newData = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        shuffleArray(newData);
        setPeople(newData);
        function shuffleArray(array) {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
        }
    }
    useEffect(()=>{
        if (searchPeople.length > 0) {
            fetchPeople()
        }
    }, [searchPeople])

   
        return (
            <Helmet title={`Results for '${searchQuery}'`}>
           
                
                    
            { people?.length > 0 ?
                <div className='content'>
                    { people?.length == 1 ?
                        <h2 className='found'>1 person found for your search of "{searchQuery}"!</h2>
                    :
                        <h2 className='found'>{people?.length} people found for your search of "{searchQuery}"!</h2>
                    }
                    <div className='people'>
                        {
                            people?.map((person, i) => (
                                <ProfileCard key={i} person={person}/>
                            ))
                        }
                    </div>
                </div>

            :
                <div className='content'>
                    <h2 className='nofound'>No related people found.</h2>
                </div>

            }
            </Helmet>
    
        )
    
    

}

export default Result;