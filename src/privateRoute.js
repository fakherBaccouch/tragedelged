import React, { useContext, useEffect } from "react"
import { Route, Redirect } from "react-router-dom"
import { UidContext } from "./components/AppContext"

export default function PrivateRoute({ component: Component, ...rest }) {
  const uid = useContext(UidContext)
 useEffect(()=>
 console.log(rest.path))
  return (
    <Route
      {...rest}
      render={props => {
 if(rest.path=== "/signin" || rest.path === "/signup"){
  return !uid ? <Component {...props} /> : <Redirect to="/folders" />
 }else { return uid ? <Component {...props} /> : <Redirect to="/signin" /> }
        

 
      }}
    ></Route>
  )
}