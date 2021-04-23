import React, { createContext, useContext, useState, useEffect, useRef } from "react";
import './signup.scss'
import axios from "axios"
import {
    BrowserRouter as Router,
    useHistory,
    Switch,
    Route,
    Link
} from "react-router-dom";
const Signup = () => {
    const history = useHistory()

    const firstnameRef = useRef()
    const lastnameRef = useRef()
    const usernameRef = useRef()

    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmationRef = useRef()

    const [error, setError] = useState("")



    const handleSubmit = async (e) => {
        e.preventDefault()

        if (passwordRef.current.value !== passwordConfirmationRef.current.value) {
            return setError("Passwords do not match")
        }

        try {
       console.log(emailRef.current.value)
     var  firstname=          firstnameRef.current.value;
     var lastname= lastnameRef.current.value
     var email= emailRef.current.value
     var password= passwordConfirmationRef.current.value
     var username= usernameRef.current.value

      
       axios({
        method: "post",
        url: `${process.env.REACT_APP_API_URL}api/user/register`,
        withCredentials: true,
        data: {
         
        "firstName": firstname,
        "lastName": lastname,
        "username": username,
          "email":email,
          "password":password },
      })
        .then((res) => {
          console.log(res);
          if (res.data.errors) {
          console.log(res.data.errors);
          } else {
            history.push("/folders")
        }
        })
        .catch((err) => {
          console.log(err);
        });

        } catch {
            setError("Failed to create an account")
        }


    }

    return (
        <div className="signin">
            <div style={{ position: "relative" }} className="signin_container">

                <h1 id='signin_title'>SIGNUP</h1>
                <form onSubmit={(event) => handleSubmit(event)}>

                    <div class="group">
                        <input name="email"
                            ref={firstnameRef} type="text" required></input>
                        <span class="highlight"></span>

                        <label>firstname</label>
                    </div>
                    <div class="group">
                        <input name="email"
                            ref={lastnameRef} type="text" required></input>
                        <span class="highlight"></span>

                        <label>lastname</label>
                    </div>

                    <div class="group">
                        <input name="username"
                            ref={usernameRef} type="text" required></input>
                        <span class="highlight"></span>

                        <label>firstname</label>
                    </div>



                    <div class="group">
                        <input name="email"
                            ref={emailRef} type="email" required></input>
                        <span class="highlight"></span>

                        <label>email addresse*</label>
                    </div>

                    <div class="group">
                        <input ref={passwordRef} name="password" type="password" required></input>
                        <span class="highlight"></span>
                        <label>password*</label>
                    </div>
                    <div class="group">
                        <input name="passwordConfirmation" ref={passwordConfirmationRef}
                            type="password" required></input>
                        <span class="highlight"></span>
                        <label>confirm password</label>
                    </div>
                    <button type="submit"
                        className="button button_signin">SIGN UP</button>
                </form>
                <p>Already have an account?</p>
                <Link to="/signin"><button className="button button_to_signup">SIGN IN</button></Link>
            </div>


        </div>
    )
}
export default Signup
