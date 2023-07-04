import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../../styles/purpose.css';

const Purpose = () => {
    const settings = {
        dots: false,
        arrows: false,
        fade: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2500,
        speed: 1500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };

    return (
        <div className="purpose-container">
            <div className='purpose-slides'>
            <Slider {...settings}>
                <div className="purpose-card">
                    <img src="/Untitled_Artwork 142 1.png" alt="" />
                    <p>We design for people and the planet</p>
                </div>
                <div className="purpose-card">
                    <img src="/Untitled_Artwork 144 1.png" alt="" />
                    <p>We want to help you tell your story</p>
                </div>
                <div className="purpose-card">
                    <img src="/Untitled_Artwork 145 1.png" alt="" />
                    <p>We strive for excellence in everything we do</p>
                </div>
            </Slider>
            </div>

            <div className='purpose-cards'>
                <div className="purpose-card">
                    <img src="/Untitled_Artwork 142 1.png" alt="" />
                    <p>We design for people and the planet</p>
                </div>
                <div className="purpose-card">
                    <img src="/Untitled_Artwork 144 1.png" alt="" />
                    <p>We want to help you tell your story</p>
                </div>
                <div className="purpose-card">
                    <img src="/Untitled_Artwork 145 1.png" alt="" />
                    <p>We strive for excellence in everything we do</p>
                </div>
            </div>
            <div className='ideas-cards'>
                <div className='ideas-card'>


                </div>

            </div>
        </div>
    )
}

export default Purpose;