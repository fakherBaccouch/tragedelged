import React from "react"
import style from "./emptyFolder.module.scss"

import { BsFolder } from "react-icons/bs";

const ChooseFolder=()=>{
    return(
        <div className={style.emptyFolder}>
    <BsFolder style={{fontSize:'200px'}}/>
    <h2 >Please Select a folder</h2>
        </div>
    )
}
export default ChooseFolder