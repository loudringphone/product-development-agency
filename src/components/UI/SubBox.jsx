import React, { useState } from "react";
import { db } from "../firebase_setup/firebase"
import { setDoc, doc } from "firebase/firestore"
import { toast } from "react-toastify"


const SubBox = (props) => {
    const [loading, setLoading] = useState(false)

    const [email, setEmail] = useState("")
    const handleEmailInput = (e) => {
        setEmail(e.target.value)
      }
      const subscribe = async(e) => {
        e.preventDefault();
        setLoading(true)
        try {
          await setDoc(doc(db, "subscriptions", email), {
              email: email,
            })
          setLoading(false)
          toast.success("Welcome to the party!", {autoClose: 1500})
        } catch (error) {
          console.log(error.code)
          setLoading(false)
        }
      }

    return (
        <div className='sub__form'>
            <form autoComplete='off' onSubmit={subscribe} action="/" className="form">
                <label htmlFor="Email" className="form__label" ></label>
                <input autoComplete="none" type="email" className="form__email" name="Email" id="Email" onInput={handleEmailInput} />
                <button className="form__submit">Submit</button>
            </form>
        </div>
    )
}

export default SubBox;