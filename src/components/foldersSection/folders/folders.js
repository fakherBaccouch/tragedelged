import { React, useEffect, Component, useState } from "react";
import ReactDOM from "react-dom";
import { $, jQuery } from 'jquery';
import SidebarItem from '../sidebarItem/sidebarItem.js'
import FoldersRight from '../foldersRight/foldersRight.js'
import { FcOpenedFolder } from 'react-icons/fc'
import style from './folders.module.scss'
import FolderIcon from '@material-ui/icons/Folder';
import GetAppRoundedIcon from '@material-ui/icons/GetAppRounded';
import FoldersNavbar from '../foldersNavbar/foldersNavbar'
import { Button, Container, Segment } from 'semantic-ui-react'
import {FaFileDownload } from "react-icons/fa";
import Axios from 'axios'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import { useTheme } from "@material-ui/core";
import { Table } from 'semantic-ui-react'
import FoldersBox from '../foldersBox/foldersBox'



const Folders = () => {
  const [items, setItems] = useState();
  useEffect(() => {
    Axios.get('http://localhost:1212/api/folder/')
      .then(res => { setItems(res.data.folderList); });
  }, []);


  return (
    <>
      <div className={style.folders}>
        <Router>
          <div className={style.tree} >
            <ul >
              {items && items.map((i) => (
                <SidebarItem item={i} key={i.id} />
              ))}
            </ul>
          </div>
          <Switch>
            <div className={style.foldersContent} >
              <Route exact path="/folders">
                <h3>Please select a folder.</h3>
              </Route>
              <Route  path={`/folders/:id`}>
               <h2>Folders</h2>            
                <FoldersContent />

              </Route>
            </div>
          </Switch>
          <Switch>
            <div className={style.foldersRight} >
              <Route exact path="/folders/:id">
                <h3>Please select a file.</h3>
              </Route>
              <Route  path={`/folders/:id/:fileId`}>
               <h3>Folders</h3>                <a>+ADD</a>

               <FoldersRight />


              </Route>
            </div>
          </Switch>
        </Router>
      </div>
    </>
  )
};

const FoldersContent = ({ match }) => {
  let { id } = useParams();

  const [subs, setSubs] = useState([])
  const [files, setFiles] = useState(null)
  useEffect(() => {
    
    Axios.get(`http://localhost:1212/api/folder/${id}`)
    .then( res => {setSubs(res.data.folderList); })

      Axios.get(`http://localhost:1212/api/file/${id}`)
      .then( res => {setFiles(res.data); })
      console.log(subs)
  }, [id]);
 

  return (

   
      <div className={style.foldersItems}>
       <FoldersBox subs={subs}/>

{ files &&
        
        <Table style={{textAlign:'center',border:"none"}} celled>
    <Table.Body>
    {files && files.map(file => {
          return (
      <Table.Row  style={{textAlign:'center',border:"none"}}>
        <Table.Cell  style={{textAlign:'center',border:"none"}}>logo</Table.Cell>
        <Table.Cell  style={{textAlign:'center',border:"none"}}>{file.nom.split('-')[1]}</Table.Cell>
        <Table.Cell  style={{textAlign:'center',border:"none"}}> {file.createdAt}  </Table.Cell>
        <Table.Cell  style={{textAlign:'center',border:"none"}}><Link  to={`/folders/${id}/${file._id}`}> <FaFileDownload size ="2rem" color="blue"/> </Link></Table.Cell>
      </Table.Row>
      ) })}
      </Table.Body>
      </Table>

          
       }

      </div>


    
  )
}
export default Folders