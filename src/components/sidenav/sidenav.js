import React, { useEffect } from "react"
import style from "./sidenav.module.scss"
import { BsFillPeopleFill ,BsTable,BsImageFill,BsFillChatDotsFill,BsNewspaper} from "react-icons/bs";
import {useLocation} from "react-router-dom";
import {RiFolderSharedFill} from "react-icons/ri";
import Brand from "./tragedel.png"
const Sidenav =(props)=>{

    const location = useLocation();
    const foldersClass = location.pathname.match(/^\/folders/) ? true : false;
    const signIn = location.pathname.match(/^\/signin/) ? true : false;

useEffect(()=>console.log(foldersClass))
    return (
        <div id="sidenav" className={style.sidenav} style={{display:props.toggle?"none":"block"}}>
           <div className={style.sidenav_brand}><img src={Brand} /></div>
           <div  className={style.sidenav_list} >
               <ul>
                   <li className={foldersClass && style.active}> <a href='/folders' style={{display:"flex",alignItems:"center"}}> <RiFolderSharedFill color={foldersClass ? "#0072b1" :'#FFFFFf'} size="2rem" />  <span> Ged</span></a></li>
                   <li > <a href='/join' style={{display:"flex",alignItems:"center", textAlign: "right",justifyContent:'space-arround'}}> <BsTable color={signIn ? "#FFFFFf" :'#FFFFFf'} size="2rem" /> <span> Todos</span></a></li>
                   <li > <a href='/Users' style={{display:"flex",alignItems:"center",justifyContent:'space-arround'}}> <BsFillPeopleFill color={signIn ? "#FFFFFf" :'#FFFFFf'} size="2rem" />  <span> Employees</span></a></li>
                   <li > <a href='/Users' style={{display:"flex",alignItems:"center",justifyContent:'space-arround'}}> <BsImageFill color={signIn ? "#FFFFFf" :'#FFFFFf'} size="2rem" />  <span> Galery</span></a></li>
                   <li > <a href='/Users' style={{display:"flex",alignItems:"center",justifyContent:'space-arround'}}> <BsFillChatDotsFill color={signIn ? "#FFFFFf" :'#FFFFFf'} size="2rem" />  <span> Chat</span></a></li>
                   <li > <a href='/Users' style={{display:"flex",alignItems:"center",justifyContent:'space-arround'}}> <BsNewspaper color={signIn ? "#FFFFFf" :'#FFFFFf'} size="2rem" />  <span> Finance</span></a></li>
               </ul>
           </div> 
        </div>
    )
}
export default Sidenav