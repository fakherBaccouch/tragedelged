import React from "react"
import style from "./newHardDisk.module.scss"
import { Input } from 'semantic-ui-react'
import { Button as Btn } from 'semantic-ui-react'
import axios from 'axios'
import { FcPlus } from "react-icons/fc";

const NewHardDisk=()=>{
  const [drop,setDrop]=React.useState(false)
  const handleDropdown=()=>{
        setDrop(!drop)
  }
  const [nom, setNom] = React.useState('');
  const addFolder =()=>{
    axios.post(`${process.env.REACT_APP_API_URL}api/folder`, {name : nom }).then(()=> window.location.reload());   
  }

return (
    <div className={style.afDrop}>
      <Btn className={style.myBtn} onClick={handleDropdown} borderRadius="50%"
        style={{
          height: "50px", borderRadius: '50% !important', color: "#fff", width: '100%',
          display: "flex !important", alignItems: "center", padding: '0 8%', justifyContent: "space-between",
          background: '#0072b1'
        }} variant="outlined">
        <span style={{ fontSize: '16px', letterSpacing: '2px', textTransform: 'none' }}>New Hard Disk   </span>   &nbsp;
        <FcPlus size='1.8rem' />
      </Btn>
      <div style={{ height: drop ? "auto" : "0", overflow: "hidden", padding: '0 8%' }} id={style.dropdown}>
        <Input onChange={e => setNom(e.target.value)} placeholder='Hard disk name...' />
        <Btn style={{ marginBottom: '8px' }} onClick={addFolder} primary>Add</Btn>
      </div>
    </div>
)}

export default NewHardDisk
