import React, { useState, useEffect } from 'react'
import { Helmet } from "../components/helmet/Helmet";
import Showcase from "../components/UI/Showcase"

import { collection, query, getDocs } from "firebase/firestore";
import {db} from "../components/firebase_setup/firebase"

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const fetchProjects = async () => {
    const q = query(collection(db, "projects"))
    await getDocs(q)
    .then((querySnapshot) => {
        const newData = querySnapshot.docs
                .map((doc) => ({ ...doc.data(), id: doc.id }))
        setProjects(newData);})
    }

    useEffect(()=>{
    fetchProjects();
    }, [])
    return (
        <div>
            <Helmet title={"Projects"}>
                <Showcase items={projects}/>
            </Helmet>
        </div>
    )

}

export default Projects;