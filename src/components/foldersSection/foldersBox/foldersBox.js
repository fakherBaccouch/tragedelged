import React from "react"
import style from "./foldersBox.module.scss"
import { FcOpenedFolder } from 'react-icons/fc'

const FoldersBox=(props)=>{
    return(
        <div>
  {props.subs.map(sub => {
          return (
            <div className={style.foldersBox_item} >
              <FcOpenedFolder style={{fontSize:"4rem",width:'30%'}}/>
              <h3>{sub.name}</h3>
              <p>{sub.children.length}</p>
            </div>

          )
        })}
        </div>
    )
}
export default FoldersBox;