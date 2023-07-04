import React, { useState } from "react";
import { db } from "../../firebase_setup/firebase"
import { setDoc, doc } from "firebase/firestore"
import { motion } from "framer-motion";

import '../../styles/subbox.css'

const SubBox = (props) => {
    const [subscribedDisplay, setSubscribedDisplay] = useState({display: "none"})
    const [loadingDisplay, setLoadingDisplay] = useState({display: "none"})
    const [errorDisplay, setErrorDisplay] = useState({display: "none"})


    const [email, setEmail] = useState("")
    const handleEmailInput = (e) => {
        setEmail(e.target.value)
      }
      const subscribe = async(e) => {
        e.preventDefault();
        setErrorDisplay({display: "none"})
        setLoadingDisplay({display: "flex", zIndex:99})
        try {
          await setDoc(doc(db, "subscriptions", email), {
              email: email,
            })
            setTimeout(() => {
                setLoadingDisplay({display: "none"})
                setSubscribedDisplay({display: "flex", zIndex:99})
            }, 1000);
        } catch (error) {
          console.log(error.code)
          setLoadingDisplay({display: "none"})
          setErrorDisplay({display: "flex"})
        }
      }

    return (
        <div className="newsletter">
            <div className="sub__heading">
                <h2>Stay in the loop</h2>
                <p>Subscribe to our newsletter to receive updates and insights </p>
            </div>
            <div className='sub__form'>
                <form autoComplete='off' onSubmit={subscribe} action="/" className="form">
                    <label htmlFor="Email" className="form__label" ></label>
                    <input autoComplete="none" type="email" className="form__email" name="Email" id="Email" onInput={handleEmailInput} placeholder="Enter your email address and subscribe now!"/>
                    <div className="subscribing" style={loadingDisplay}>Subscribing...</div>
                    <div className="form__email" style={subscribedDisplay}>Welcome aboard!</div>
                    <motion.button className="form__submit" whileHover={{scale:1.1}}>Submit</motion.button>
                </form>
                <div className="sub__error" style={errorDisplay}>There seems to have been an error - please try again.</div>
            </div>
        </div>
    )
}

export default SubBox;