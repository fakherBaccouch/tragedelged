import React, { useEffect } from "react"
import style from "./sidenav.module.scss"
import { ImBooks } from 'react-icons/im'
import {  } from 'react-icons/go'
import { BsFillPeopleFill ,BsTable,BsImageFill,BsBuilding,BsFillChatDotsFill,BsNewspaper,BsHouseFill,BsFillEnvelopeFill} from "react-icons/bs";
import { BrowserRouter as Router, Switch, Route, Link, useParams,useLocation} from "react-router-dom";
import {RiFolderSharedFill} from "react-icons/ri";

const Sidenav =(props)=>{

    const location = useLocation();
    const foldersClass = location.pathname.match(/^\/folders/) ? true : false;
    const signIn = location.pathname.match(/^\/signin/) ? true : false;

useEffect(()=>console.log(foldersClass))
    return (
        <div style={{width:!props.toggle?'0':''}} className={style.sidenav}>
           <div className={style.sidenav_brand}>TRAGEDEL</div>
           <div  className={style.sidenav_list} >

               <ul>
                   <li className={foldersClass && style.active}> <a href='/folders' style={{display:"flex",alignItems:"center"}}> <RiFolderSharedFill color={signIn ? "#4884ee" :'#4884ee'} size="2rem" />  Folders</a></li>


               </ul>
           </div>
 
        </div>
    )
}
export default Sidenav