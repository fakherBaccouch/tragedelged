import {React,useContext} from 'react'
import Folders from '../components/foldersSection/folders/folders.js'
import {UidContext} from '../components/AppContext';
import {Redirect} from 'react-router-dom'
const Folderspage=()=>{
    const  uid  = useContext(UidContext);
console.log("folderspage",uid)
    return (
        <div style={{boxSizing:'border-box'}}>
            <div style={{display:'flex'}}>
         <div style={{width:'100%'}}>
        <Folders/>
         </div>
         </div>
        </div>
    )
}
export default Folderspage