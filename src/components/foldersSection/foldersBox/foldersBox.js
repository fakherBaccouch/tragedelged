import React from "react"
import style from "./foldersBox.module.scss"
import { FcOpenedFolder } from 'react-icons/fc'
import {FcFolder} from "react-icons/fc"

const FoldersBox=(props)=>{
    return(
        <div className={style.foldersBox}>
     {props.subs.length>0 && <h2>Folders</h2>}
     <div className={style.foldersBox_items}>
  {props.subs.map(sub => {
          return (
         <div className={style.foldersBox_item} >
              <FcFolder  style={{fontSize:"4rem",width:'30%'}}/>
              <h3>{sub.name}</h3>
              <p>{sub.children.length}</p>
            </div>

          )
        })}
        </div>
        </div>
    )
}
export default FoldersBox;