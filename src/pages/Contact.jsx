import React from 'react';
import { Helmet } from "../components/helmet/Helmet";
import SubBox from "../components/UI/SubBox"


const Contact = () => {

    return (
        <div className='content'>
            <Helmet title={"Contact Us"}>
                <SubBox />
            </Helmet>
        </div>
    )

}

export default Contact;