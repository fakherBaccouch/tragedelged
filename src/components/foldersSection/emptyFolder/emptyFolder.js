import React from "react"
import style from "./emptyFolder.module.scss"

import { BsFolder } from "react-icons/bs";

const EmptyFolder=()=>{
    return(
        <div className={style.emptyFolder}>
    <BsFolder style={{fontSize:'200px'}}/>
    <h2 >There are no items in this folder</h2>
    <h4 >YOU CAN ADD FOLDERS OR UPLOAD FILES </h4>
        </div>
    )
}
export default EmptyFolder