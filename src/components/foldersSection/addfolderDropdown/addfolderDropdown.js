import React from "react"
import style from "./addfolderDropdown.module.scss"
import Button from '@material-ui/core/Button';
import {useParams} from 'react-router-dom'
import { Input } from 'semantic-ui-react'
import { Button as Btn } from 'semantic-ui-react'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import axios from 'axios'
import addF from './addNewFolder.png'
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
const AddfolderDropdown=()=>{
    const [drop,setDrop]=React.useState(false)
    const handleDropdown=()=>{
        setDrop(!drop)
    }
    const [nom, setNom] = React.useState('');
    let { id } = useParams();
    console.log("parentId : ",id);
  const addFolder =()=>{
    axios.post(`${process.env.REACT_APP_API_URL}api/folder`, {name : nom , parentId:id}).then(()=> window.location.reload());   
  }
    return(
        <div className={style.afDrop}>
                           <Button  onClick={handleDropdown}    style={{height:"50px",color:"#1BA260",width:'100%',display:"flex",alignItems:"center",justifyContent:"space-between"}}  variant="outlined">
                             <img src={addF} alt='dropdown' style={{height:"40px"}} />NEW FOLDER
                           {drop?<ExpandLessIcon></ExpandLessIcon>:<KeyboardArrowDownIcon  fontsize='large' />}</Button>  

                           <div style={{height: drop?"auto":"0",overflow:"hidden"}}  id={style.dropdown}>
                   <Input style={{display:'inline-block',width:'100%'}} onChange={e => setNom(e.target.value)} placeholder='Folder name...' />  
                   <Btn style={{marginBottom:'8px'}} onClick={addFolder} positive>Add folder</Btn>
                  
                   </div>     
         </div>
    )
}
export default AddfolderDropdown
