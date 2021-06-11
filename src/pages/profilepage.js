import {React} from 'react'
import Profile from '../components/profile/profile.js'
const Profilepage=()=>{
    return (
        <div style={{boxSizing:'border-box'}}>
            <div style={{display:'flex'}}>
         <div style={{width:'100%'}}>
        <Profile/>
         </div>
         </div>
        </div>
    )
}
export default Profilepage