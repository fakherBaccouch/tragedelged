import React from 'react'
import Folders from '../components/foldersSection/folders/folders.js'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useHistory,
    useLocation
  } from "react-router-dom";
const Folderspage=()=>{

    return (
        <div style={{boxSizing:'border-box'}}>
            <div style={{display:'flex'}}>
         <div style={{width:'100%'}}>
        <Folders/>
         </div>
         </div>
        </div>
    )
}
export default Folderspage