import React from 'react';
import style from './filesBox.module.scss'
import { FileIcon, defaultStyles } from 'react-file-icon';
import moment from 'moment'

export default function FilesBox(props) {

  return (
    <div className={style.filesBox}>


      {props.files && props.files.length > 0 && <><hr /> <h2>Files</h2></>}

        {props.files && props.files.length > 0 &&





            <table >
     <thead  style={{width:'99%'}}>
              <tr>
                <th><h4>File</h4></th>
                <th><h4>file Name</h4> </th>
                <th><h4>Uploaded_By</h4></th>
                <th><h4>Uploaded_At</h4></th>
                <th><h4> </h4></th>

              </tr>
            </thead>
              <tbody>
                {props.files && props.files.map((file) => (
                  <tr key={file.nom}>
                    <td component="th" scope="row">
                      <div style={{ width: "40px",display:"flex" }}>


                        <FileIcon fontSize={40} extension={file.nom.split('.')[1]} {...defaultStyles[file.nom.split('.')[1]]} />;
              </div>





                    </td>
                    <td >
                    <div style={{  textOverflow: "ellipsis", overflow:" hidden"}}  className={style.tdName}>   {file.nom.split('.')[0]}</div>    
                    </td>
                    <td >                    <div  className={style.tdPb}>   {file.createdBy.username}</div></td>
                    <td >
                 <div>  {moment(file.createdAt).format('L')}</div> 
                     <div>{moment(file.createdAt).format('LTS')}</div>
                     </td>
                    <td align='center'>   <div className={style.download}>   Download</div></td>

                  </tr>
                ))}
              </tbody>
            </table>


        }
    </div>);
}