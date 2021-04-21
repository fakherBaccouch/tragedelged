import React ,{useContext, useState} from "react"
import style from './navbar.module.scss'
import MenuIcon from '@material-ui/icons/Menu';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Image from './pdp.jpg'
import Brand from "./tragedel.png"
import {useLocation } from 'react-router-dom'
import { useEffect } from "react/cjs/react.development";
import axios from "axios"
import  cookie from "js-cookie"
import NotificationsActiveOutlinedIcon from '@material-ui/icons/NotificationsActiveOutlined';
import {UidContext} from '../AppContext';
import {Link,Router} from "react-router-dom";
import { Button } from 'semantic-ui-react'

const Navbar = (props) => {

  const  uid  = useContext(UidContext);
  const location = useLocation();
  console.log('uid nav',location);

  let pathNavbar = location.pathname.split("/")[1].toUpperCase();
  const [fileNotif, setFileNotif] = useState(null);
  const [notifDropdown, setNotifDropdown] = useState(false)
  const removeCookie = (key) => {
    if (window !== "undefined") {
      cookie.remove(key, { expires: 1 })
    }
  }

  const logout = () => {
    axios({
      method: 'get',
      url: 'http://localhost:1212/api/user/logout',
      withCredentials: true,
    }).then(async ()  =>  await removeCookie("jwt"),            window.location = "/"    ).then(()=>            window.location = "/")
      .catch((err) => console.log(err))
  }
  useEffect(() => {
    console.log("navbar uid",uid)

    const fetchFileNotif = async () => {
      await axios({
        method: 'get',
        url: `${process.env.REACT_APP_API_URL}api/user/filenotif/${uid}`,
        withCredentials: true
      })
        .then((res) => { setFileNotif(res.data); console.log('fileNotif', res.data) })
        .catch((err) => console.log('no file notifs'))
    }
    fetchFileNotif();
  }, [uid]);

  return (
    <div style={{ color: !props.toggled ? '#ffffff' : '', background: !props.toggled ? '#0072b1' : '' }} id="navbar" className={style.navbar}>
      <div className={style.navbar_left}>
        <MenuIcon onClick={() => props.toggle()} style={{ fontSize: "40px", fontWeight: "400", cursor: 'pointer' }} />
      </div>
      {fileNotif && fileNotif.length > 0 &&
        <div className={style.navbar_center} >
          <div onClick={() => setNotifDropdown(!notifDropdown)} className={style.notificationsBox}><div><NotificationsActiveOutlinedIcon style={{ fontSize: '35px',color:props.toggled?'black':'white' }} /></div> <div className={style.notifNumber}> {fileNotif.length}</div> </div>
          <div style={{ display: notifDropdown ? "block" : "none" }} className={style.listDropdown}>
            
            <div className={style.listDropdown_head}>
            <div>  Notifications</div><div> {fileNotif.length}</div>
            </div>
            <div  className={style.listDropdown_body}>
            {fileNotif && fileNotif.map(notif => {
            return (
              <div className={style.notifItem}><span id={style.notif_p}>{notif.name}</span><div id={style.notif_div}><a href={"/folders/"+notif.folder}>View</a></div></div>)
          })}</div></div>
        </div>
      }
    {uid ?<div className={style.navbar_right}>
        <img src={Image} />
        <div className={style.navbar_right_description}><h4>Fakher Baccouch</h4><span style={{ color: !props.toggled ? '#000' : '' }}  >Super Admin</span></div>
             &nbsp;<ExitToAppIcon style={{ cursor: 'pointer' }} onClick={logout} fontSize='large' />
      </div>:<div className={style.navbar_right_log} >
  <a href='/signup'  >    <Button content='Signup' style={{height:"80%"}}  /> </a> 
  < a href='/signin'  >    <Button content='Login' positive /></a>  
         </div> }  
    

    </div>
  )
}
export default Navbar