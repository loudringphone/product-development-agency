import React, { useState, useEffect } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../../styles/showcase.css'

import { collection, query, getDocs, Timestamp } from "firebase/firestore";
import {db} from '../firebase_setup/firebase';


const Showcase = () => {
  const [slides, setSlides] = useState(4);
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

useEffect(() => {
  const handleResize = () => {
    if (window.innerWidth <= 800) {
      setSlides(2);
    } else if (window.innerWidth <= 1100) {
      setSlides(3);
    } else {
      setSlides(4);
    }
  };
  window.addEventListener('resize', handleResize);
}, []);











  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: slides,
    slidesToScroll: 3
  };

  return (
    <div id="showcase">
      <Slider {...settings}>
        {
          projects.map((project, i) => (
            <div  key={i} className="box">
              <img src={project.image && project.image[0]?.downloadURL} alt={project.name} />
              <h4>{project.name}</h4>
            </div>
            ))
        }
        <div className="box">
          <h4>1</h4>
        </div>
        <div className="box">
          <h4>2</h4>
        </div>
        <div className="box">
          <h4>3</h4>
        </div>
        <div className="box">
          <h4>4</h4>
        </div>
      </Slider>
    </div>
  );
};

export default Showcase;