import React from 'react'
import Folders from '../components/folders/folders.js'
import ProjectsNavbar from '../components/projectsNavbar/projectsNavbar'
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
         <ProjectsNavbar/>
         <Router>
         <Switch>
           <main >
       <Route path="/folders"  component={Folders}/>
       </main>
         </Switch>
         </Router>
         </div>
         </div>
        </div>
    )
}
export default Folderspage