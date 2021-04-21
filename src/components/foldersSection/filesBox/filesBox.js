import React from 'react';
import style from './filesBox.module.scss'
import { FileIcon, defaultStyles } from 'react-file-icon';


export default function FilesBox(props) {

  return (
    <div className={style.filesBox}>


      {props.files && props.files.length > 0 && <><hr /> <h2>Files</h2></>}

        {props.files && props.files.length > 0 &&





            <table >
     <thead>
              <tr>
                <th><h4>File</h4></th>
                <th><h4>file Name</h4> </th>
                <th><h4>published By</h4></th>
                <th><h4>published Date</h4></th>
                <th><h4> </h4></th>

              </tr>
            </thead>
              <tbody>
                {props.files && props.files.map((file) => (
                  <tr key={file.nom}>
                    <td style={{ height: 'auto !important', width: 'fit-content', width: '15%' }} component="th" scope="row">
                      <div style={{ width: "40px",display:"flex" }}>


                        <FileIcon fontSize={40} extension={file.nom.split('.')[1]} {...defaultStyles[file.nom.split('.')[1]]} />;
              </div>





                    </td>
                    <td style={{ textAlign: 'left', maxWidth: "40%",width:'40%',wordBreak: "break-word" }} component="th" scope="row">
                    <div style={{wordBreak:"break-word"}} className={style.tdName}>   {file.nom.split('.')[0]}</div>    
                    </td>
                    <td style={{ textAlign: 'left', maxWidth: "20%",width:'20%'}}>                    <div  className={style.tdPb}>   Fakher baccouch</div></td>
                    <td >April 15,2021</td>
                    <td align='center'>   <div className={style.download}>   Download</div></td>

                  </tr>
                ))}
              </tbody>
            </table>


        }
    </div>);
}