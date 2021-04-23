import { React, useEffect, useState } from "react";
import style from "./uploadDropdown.module.scss"
import Button from '@material-ui/core/Button';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import UploadFile from '../uploadFile/uploadFile'
import UplF from './uploadFile.png'
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import Axios from 'axios';
import { Input } from "@material-ui/core";
const UploadDropdown=()=>{
    const [drop,setDrop]=useState(false)
    const handleDropdown=()=>{
        setDrop(!drop)
    }
    const [users, setUsers] = useState([]);
    const [checkedUsers, setCheckedUsers] = useState([]);

    useEffect(() => {
      Axios.get('http://localhost:1212/api/user/')
        .then(res => { setUsers(res.data); });
    }, []);

    const checkUser = (id)=>{
    if(checkedUsers.includes(id))    {

const newUsers = checkedUsers.filter(u=>{return u!== id})
setCheckedUsers(newUsers)
console.log(checkedUsers)

    }else{
        setCheckedUsers(oldArray => [...oldArray, id]);

    }

    }
    return ( 
        <div>
            <div className={style.afDrop}>
                <Button onClick={handleDropdown} style={{ height: "50px", color: "#1BA260", width: '100%',
                 display: "flex", alignItems: "center", justifyContent: "space-between" }} variant="outlined">
                    <img src={UplF} style={{ height: "40px" }} />Upload a file
                    {drop ? <ExpandLessIcon /> : <KeyboardArrowDownIcon fontsize='large' />}
                </Button>
                
                <div style={{ height: drop ? "auto" : "0", overflow: 'hidden' }} id={style.dropdown}>
                    <div>
                        {
                            users.map(user=> <div style={{display:"flex",width:'100%',border:"2px solid red",justifyContent:'space-arround'}}><div>{user.username}</div>
                            <input type="checkbox" id={user._id} onClick={()=>{checkUser(user._id)}}  /></div> )
                        }
                    </div>
                    <UploadFile userTab={checkedUsers} />
                </div>
            </div>
        </div>
    )
}
export default UploadDropdown
