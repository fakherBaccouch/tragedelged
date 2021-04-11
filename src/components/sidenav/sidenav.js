import React from "react"
import style from "./sidenav.module.scss"
import { ImBooks } from 'react-icons/im'
import {  } from 'react-icons/go'
import { BsFillPeopleFill ,BsTable,BsImageFill,BsBuilding,BsFillChatDotsFill,BsNewspaper,BsHouseFill,BsFillEnvelopeFill} from "react-icons/bs";

const Sidenav =(props)=>{
    return (
        <div style={{width:!props.toggle?'0':''}} className={style.sidenav}>
           <div className={style.sidenav_brand}><img src="/tragedel.png" style={{width:"100%",height:"auto"}}/></div>
           
           <div  className={style.sidenav_list} >
               <ul>
                   <li> <BsHouseFill size="2rem" color="white"/><a>HOME</a></li>
                   <li> <BsFillPeopleFill size="2rem" color="white" /><a>USERS</a></li>
                   <li> <BsBuilding size="2rem" color="white" /><a>PROJECTS</a></li>
                   <li> <BsNewspaper size="2rem" color="white" /><a>NEWS</a></li>
                   <li> <BsTable size="2rem" color="white" /><a>TODOS</a></li>
                   <li> <BsFillChatDotsFill size="2rem" color="white" /><a>BLOGS</a></li>
                   <li> <BsImageFill size="2rem" color="white" /><a>IMAGES</a></li>
                   <li> <ImBooks size="2rem" color="white" /><a>ARCHIVE</a></li>
                   <li> <BsFillEnvelopeFill size="2rem" color="white" /><a>MESSAGES</a></li>

               </ul>
           </div>
 
        </div>
    )
}
export default Sidenav