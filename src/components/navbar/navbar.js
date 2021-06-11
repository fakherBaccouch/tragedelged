import React ,{useContext, useState} from "react"
import style from './navbar.module.scss'
import MenuIcon from '@material-ui/icons/Menu';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Image from './pdp.jpg';
import Brand from "./tragedel.png";
import {useLocation } from 'react-router-dom';
import { useEffect } from "react/cjs/react.development";
import axios from "axios";
import  cookie from "js-cookie"
import NotificationsActiveOutlinedIcon from '@material-ui/icons/NotificationsActiveOutlined';
import {UidContext} from '../AppContext';
import {Link,Router} from "react-router-dom";
import { Button } from 'semantic-ui-react'
import { Icon, Label, Menu } from 'semantic-ui-react'

const Navbar = (props) => {

  const  uid  = useContext(UidContext);
  const location = useLocation();

  let pathNavbar = location.pathname.split("/")[1].toUpperCase();
  const [fileNotif, setFileNotif] = useState([]);
  const [user, setUser] = useState({});
  const [notifDropdown, setNotifDropdown] = useState(false)
  const removeCookie = (key) => {
    if (window !== "undefined") {
      cookie.remove(key, { expires: 1 })
    }
  }
  console.log("navbar files",fileNotif)

  const logout = () => {
    axios({
      method: 'get',
      url: 'http://localhost:1212/api/user/logout',
      withCredentials: true,
    }).then(async ()  =>  await removeCookie("jwt"), window.location = "/").then(()=> window.location = "/")
      .catch((err) => console.log(err))
  }
  useEffect(() => {

    const fetchFileNotif = async () => {
      await axios({
        method: 'get',
        url: `${process.env.REACT_APP_API_URL}api/user/filenotif/${uid}`,
        withCredentials: true
      })
        .then((res) => { setFileNotif(res.data); })
        .catch((err) => console.log('no file notifs'))
    }
  
      const fetchUser = async () => {
        await axios({
          method: 'get',
          url: `${process.env.REACT_APP_API_URL}api/user/${uid}`,
          withCredentials: true
        })
          .then((res) => { setUser(res.data) })
          .catch((err) => console.log('no user'))
      }
      fetchUser();
    fetchFileNotif();
  }, [uid]);

  return (
    <div style={{ color: !props.toggled ? '#ffffff' : '', background: !props.toggled ? '#0072b1' : '' }} id="navbar" className={style.navbar}>
      <div className={style.navbar_left}>
        <MenuIcon onClick={() => props.toggle()} style={{ fontSize: "40px", fontWeight: "400", cursor: 'pointer' }} />
      </div>
      {fileNotif && fileNotif.length > 0 &&
        <div className={style.navbar_center} >
<Menu className={style.notificationsBox}  compact>
    
    <Menu.Item className={style.item}     onClick={() => setNotifDropdown(!notifDropdown)}  as='a'>
      <Icon name='users'   /> New files
      <Label color='red' floating>
        {fileNotif.length}
      </Label>
    </Menu.Item>
  </Menu>
          {/* <div onClick={() => setNotifDropdown(!notifDropdown)} className={style.notificationsBox}><div style={{background:"blue"}}>NEW FILES <NotificationsActiveOutlinedIcon style={{ fontSize: '35px',color:props.toggled?'black':'white' }} /></div> <div className={style.notifNumber}> {fileNotif.length}</div> </div> */}
          <div style={{ display: notifDropdown ? "block" : "none" }} className={style.listDropdown}>
            
          
            <div  className={style.listDropdown_body}>
            {fileNotif && fileNotif.map(notif => {
            return (
              <div className={style.notifItem}><span id={style.notif_p}>{notif.name}</span><div id={style.notif_div}><a href={"/folders/"+notif.folder}>View</a></div></div>)
          })}</div></div>
        </div>
      }
    {props.userid ?<div className={style.navbar_right}>
        <img src={`http://localhost:1212${user.picture}`} alt='user picture'/>
        <div className={style.navbar_right_description}><h4>{user.username}</h4><span style={{ color: !props.toggled ? '#000' : '' }}  >{user.role}</span></div>
             &nbsp;<ExitToAppIcon style={{ cursor: 'pointer' }} onClick={logout} fontSize='large' />
      </div>:<div className={style.navbar_right_log} >
  <a href='/signup'  >    <Button content='Signup' style={{height:"80%"}}  /> </a> 
  < a href='/signin'  >    <Button content='Login' positive /></a>  
         </div> }  
    

    </div>
  )
}
export default Navbar