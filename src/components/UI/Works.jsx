import '../../styles/works.css';
import SmallInfoCard from './SmallInfoCard';
import { useState, useEffect } from 'react';
import { collection, query, getDocs } from "firebase/firestore";
import {db} from "../../firebase_setup/firebase"

const Works = () => {

    const [projects, setProjects] = useState([]);
    const fetchProjects = async () => {
        const q = query(collection(db, "main_projects"))
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
        <div className="works-container">
            <div className='works-title'>
                <h1>Take a look at our work</h1>
                <div className='works-content'>
                    <p>We embrace challenges, seek innovative solutions, apply the latest technical expertise and strive to create products that captivate and inspire.</p>
                </div>
            </div>
            {projects?.map((project, i) => (
                <SmallInfoCard key={i} info={project}/>
                ))
            }
        </div>
    )
}

export default Works;