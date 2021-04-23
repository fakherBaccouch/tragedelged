import React, { createContext, useContext, useState, useEffect, useRef } from "react";
import axios from "axios"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
  Link
} from "react-router-dom";
import CircularUnderLoad from "../../spinner"

const Signin=()=>{
  const [ spinner, setSpinner ] = useState(false)

  const emailRef = useRef()
  const passwordRef = useRef()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()
  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setError("")
      setLoading(true)
      console.log(emailRef.current.value)
      e.preventDefault();
let email=emailRef.current.value
let password=passwordRef.current.value

      axios({
        method: "post",
        url: `${process.env.REACT_APP_API_URL}api/user/login`,
        withCredentials: true,
        data: {
          "email":email,
          "password":password,
        },
      })
        .then((res) => {
          console.log(res);
          if (res.data.errors) {
          console.log(res.data);
          } else {
            window.location = "/folders";
          }
        })
        .catch((err) => {
          console.log(err);

        });
    } catch {
      setError("Failed to log in")

    }
    setLoading(false)

  }

    return(
        <div className="signin">
    <div style={{position:"relative"}} className="signin_container">

    <h1 id='signin_title'>SIGNIN</h1>
    <form  onSubmit={handleSubmit}>
    
    <div class="group">      
      <input ref={passwordRef} ref={emailRef} type="email" required></input>
      <span class="highlight"></span>
     
      <label>Adresse Email*</label>
    </div>
      
    <div class="group">      
      <input  ref={passwordRef} type="password" required></input>
      <span class="highlight"></span>
      <label>Passwrod</label>
    </div>
    <button  style={{padding:"0",height:"60px"}} className="button button_signin">{loading? <CircularUnderLoad/>:<p >SIGN IN</p>}</button>
  </form>
     <p>Don't have an account yet?</p>
     <Link to="/signup"><button className="button button_to_signup">SIGN UP</button></Link>   
    </div>
  

        </div>
    )
}
export default Signin