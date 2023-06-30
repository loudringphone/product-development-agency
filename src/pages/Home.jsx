import React from 'react';
import { Helmet } from "../components/helmet/Helmet";
import Showcase from "../components/Showcase"


const Home = () => {

    return (
        <div>
            <Helmet title={"Home"}>
                <Showcase />
            </Helmet>
        </div>
    )

}

export default Home;