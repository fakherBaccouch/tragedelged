import React from 'react'
import {FcFolder} from "react-icons/fc";
import HD from "./newDisk.png"
import { Link} from "react-router-dom";


const SidebarItem=({ item })=> {     
    let children = null;
    if (item.children && item.children.length) {
      children = (
        <ul >
          {item.children.map((i) => (
            <SidebarItem item={i} key={i._id} />
          ))}
        </ul>
      );
    }
  
    return (
      <li > 
        <Link to={"/folders/"+item._id} > <a style={{display:"flex",alignItems:"center"}}>{item.parentId?<div> <FcFolder style={{marginRight:'5px',fontSize:'1.8rem'}} /></div>:<div><img src={HD} style={{height:'35px'}}/></div>} <div>  {item.name}</div></a> </Link>
        {children}
      </li> 
    );
  }
export default SidebarItem
