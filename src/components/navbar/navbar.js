import React from "react"
import style from './navbar.module.scss'
import MenuIcon from '@material-ui/icons/Menu';
const Navbar=(props)=>{
return(
    <div className={style.navbar}>
         <div className={style.navbar_left}>
                <MenuIcon onClick={()=>props.toggle()}  style={{fontSize:"40px",fontWeight:"400",cursor:'pointer'}}/>
               <span >TRAGEDEL</span>

         </div>
         <div className={style.navbar_right}>

             <img src="/logo512.png" />
             <div className={style.navbar_right_description}><h4>Fakher Baccouch</h4><span>Super Admin</span></div>
         </div>

    </div>
)
}
export default Navbar