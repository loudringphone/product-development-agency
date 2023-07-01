import React, { useState, useEffect } from 'react'
import { Helmet } from '../components/helmet/Helmet'
import { useParams } from 'react-router-dom';

import { doc, getDoc } from "firebase/firestore";
import {db} from "../components/firebase_setup/firebase"

import BigInfoCard from "../components/UI/BigInfoCard"

const Person = () => {
    const [person, setPerson] = useState([]);
    let {personId} = useParams()
   
    const [loading, setLoading] = useState(true);
    const [personFound, setPersonFound] = useState(true);
    useEffect(() => {
        const fetchPerson = async () => {
          setLoading(true);
          try {
            const docRef = doc(db, "people", personId);
            const docSnap = await getDoc(docRef);
            const data = docSnap.data();
            const id = docSnap.id; // <-- retrieve the document ID
            setPerson({ id, ...data }); // <-- include the ID in the retrieved data
            setLoading(false);
            setPersonFound(true);
          } catch (error) {
            console.error(error);
            setPersonFound(false);
          }
        };
        fetchPerson();
      }, [personId]);;

      if (!personFound) {
        return (
          <Helmet title="person not found">
            <div className="productDetails" style={{display: 'flex',
              alignItems: 'center'}}>
              <p className='loading'>person not found.</p>
            </div>
          </Helmet>
        )
      }
      if (person) {
        if (loading) {
          return (
            <Helmet title="Fetching the person information...">
            <div className="personDetails" style={{display: 'flex',
              alignItems: 'center'}}>
              <p className='person-not-found'>Fetching the person information...</p>
            </div>
            </Helmet>)
        }
    
        return (
          <Helmet title={person.name}>
          <div className="person__details">
            <BigInfoCard info={person}/>
          </div>
          </Helmet>
        );
      }

}

export default Person;