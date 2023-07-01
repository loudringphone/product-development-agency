import React from 'react';
import { Helmet } from "../components/helmet/Helmet";
import SubBox from "../components/UI/SubBox"
import Map from '../components/UI/Map';

import '../styles/contact.css'

const Contact = () => {

    return (
        <div className='content'>
            <Helmet title={"Contact Us"}>
                <div className='headquarter-location'>
                    <Map />
                    <div className='location-right'>
                        <h3>One Agency Ltd</h3>
                        <ul>
                        <li>1 Market St</li>
                        <li>Sydney, NSW</li>
                        <li>2000</li>
                        <li>Phone: 02 9855 5555</li>
                        <li>Email: info@oneagency.com.au</li>
                        </ul>
                    </div>
                </div>
                <SubBox />
            </Helmet>
        </div>
    )

}

export default Contact;