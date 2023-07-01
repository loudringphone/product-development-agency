import React, { useState, useEffect } from 'react'
import { Helmet } from "../components/helmet/Helmet";
import Showcase from "../components/UI/Showcase"

import { collection, query, getDocs } from "firebase/firestore";
import {db} from "../firebase_setup/firebase"

import '../styles/projects.css'

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
    console.log(projects)
    useEffect(()=>{
    fetchProjects();
    }, [])
    return (
        <Helmet title={"Projects"}>
        <div className='content'>
            <h2 className='our-projects'>Winston's projects</h2>
            <Showcase rtl={false} items={projects.filter(project => project.creator === 'winstonlau')}/>
            <h2 className='our-projects1'>Darcy's projects</h2>
            <Showcase rtl={true} items={projects.filter(project => project.creator === 'darcymansfield')}/>
        </div>
        </Helmet>

    )

}

export default Projects;