import React, { useState, useEffect } from 'react'
import Slider from "react-slick";
import { Link, useLocation } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../../styles/showcase.css'


const Showcase = (props) => {
  const [slides, setSlides] = useState(4);
  const {pathname} = useLocation()
  const [loading, setLoading] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const items = props.items
  useEffect(() => {
    if (pathname && items) {
      setLoading(false)
    }
  }, [pathname])
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 490) {
        setSlides(1);
      } else if (window.innerWidth <= 800) {
        setSlides(2);
      } else if (window.innerWidth <= 1400) {
        setSlides(3);
      } else {
        setSlides(4);
      }
    };
    window.addEventListener('resize', handleResize);
  }, []);
  useEffect(() => {
    if (windowWidth <= 490) {
      setSlides(1);
    } else if (windowWidth <= 800) {
      setSlides(2);
    } else if (windowWidth <= 1400) {
      setSlides(3);
    } else {
      setSlides(4);
    }
  }, [windowWidth])

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1000,
    speed: 7500,
    slidesToShow: slides,
    slidesToScroll: slides,
    rtl: props.rtl,
  };
 
  if (loading) {
    return null; // or show a loading indicator
  }
  return (
    <div id="showcase">
      <Slider {...settings}>
        {
          items && items.map((item, i) => (
            <div  key={i} className="box">
              <Link to={pathname === '/' || pathname === '/home' ? `people/${item.name.replace(' ','').toLowerCase()}` : item.url}>
                <img src={item.image && item.image[0]?.downloadURL} alt={item.name} />
</Link>
              <h4>{item.name}</h4>
            </div>
            ))
        }
        {
          items && items.map((item, i) => (
            <div key={i} className="box">
              <Link to={pathname === '/' || pathname === '/home' ? `people/${item.name.replace(' ','').toLowerCase()}` : item.url}>
                <img src={item.image && item.image[0]?.downloadURL} alt={item.name} />
</Link>
              <h4>{item.name}</h4>
            </div>
            ))
        }
        
      
      </Slider>
    </div>
  );
  
};

export default Showcase;