import React from 'react';
import { Link } from 'react-router-dom'
import style from './foldersBox.module.scss'
import { FcFolder } from "react-icons/fc";
import moment from 'moment'

const FoldersBox = (props) => {

  return (
    <div className={style.foldersBox}>
      <hr className={style.hrr} />
      {props.subs.length > 0 && <h2>Folders</h2>}
      {props.subs && props.subs.length > 0 &&
        <table >
          <thead>
            <tr>
              <th><h4>Folder</h4></th>
              <th><h4>Folder Name</h4> </th>
              <th><h4>Creation Date</h4></th>
              <th><h4>Sub folders</h4></th>
            </tr>
          </thead>
          <tbody>
            {props.subs && props.subs.map((sub) => (
              <tr key={sub.namme}>
                <td style={{ height: 'auto !important', width: 'fit-content', width: '15%' }} component="th" scope="row">
                  <Link to={`/folders/${sub._id}`}>       <FcFolder size="3rem" /> </Link>      </td>
                <td style={{ textAlign: 'left', maxWidth: "40%", width: '40%', wordBreak: "break-word" }} component="th" scope="row">
                  <div style={{ wordBreak: "break-word" }} className={style.tdName}>   {sub.name}</div>
                </td>

                <td>
                <div>    {moment(sub.createdAt).format('L')}</div>
                  <div>   {moment(sub.createdAt).format('h:mm:ss a')}</div>
                  </td>
                <td align="center">   {sub.children?.length}</td>
              </tr>
            ))}
          </tbody>
        </table>
      }
    </div>
  )
}
export default FoldersBox;