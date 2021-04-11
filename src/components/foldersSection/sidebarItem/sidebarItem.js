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
import { FcOpenedFolder } from 'react-icons/fc'


const SidebarItem=({ item })=> {    
       
      
    let children = null;
    if (item.children && item.children.length) {
      children = (
        <ul >
          {item.children.map((i) => (
            <SidebarItem item={i} key={i.id} />
          ))}
        </ul>
      );
    }
  
    return (

      <li > 
        <Link to={"/folders/"+item._id} > <a style={{display:"flex",alignItems:"center"}}> <FcOpenedFolder size="2rem"/>  {item.name}</a> </Link>
        {children}
      </li> 

    );
  }
export default SidebarItem
