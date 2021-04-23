import React from "react"
import style from "./emptyFolder.module.scss"
import img from "./emptyFolder.png"

const EmptyFolder=()=>{
    return(
        <div className={style.emptyFolder}>
    <img style={{height:'20rem'}}  src={img}/>
    <h2 >There are no items in this folder</h2>
    <h4 >YOU CAN ADD FOLDERS OR UPLOAD FILES </h4>
        </div>
    )
}
export default EmptyFolder