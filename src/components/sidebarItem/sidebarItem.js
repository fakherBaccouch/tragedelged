import{React,useEffect ,Component} from 'react'
import { $, jQuery } from 'jquery';
import style from './sidebarItem.module.scss'
import {FolderCloseIcon,Icon}from 'evergreen-ui'
import FolderOutlinedIcon from '@material-ui/icons/FolderOutlined';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";
const SidebarItem=({ item })=> {
     
       
      
    let children = null;
    if (item.sub && item.sub.length) {
      children = (
        <ul>
          {item.sub.map((i) => (
            <SidebarItem item={i} key={i.id} />
          ))}
        </ul>
      );
    }
    console.log(item._id.$oid)
  
    return (

      <li >
          
          
          <Link to={"/folders/"+item._id.$oid} > <a style={{display:"flex",alignItems:"center"}}> <FolderOutlinedIcon  style={{color:'#FFA000',fontSize:"40px"}}  />  {item.name}</a> </Link>
        {children}
      </li>

    );
  }
export default SidebarItem
