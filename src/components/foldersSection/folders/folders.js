import { React, useEffect, Component, useState } from "react";
import { Dimmer, Loader, Image } from 'semantic-ui-react'

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
import { FaFileDownload } from "react-icons/fa";
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
import FilesBox from "../filesBox/filesBox"
import EmptyFolder from "../emptyFolder/emptyFolder"

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
            {items && items.length ? <ul >
              {items && items.map((i) => (
                <SidebarItem item={i} key={i.id} />
              ))}
            </ul> : <Segment style={{ height: '100%' }}>
              <Dimmer active inverted>
                <Loader size='big'>Loading</Loader>
              </Dimmer>

              <Image src='http://semantic-ui.com/images/wireframe/paragraph.png' />
            </Segment>}











          </div>
          <Switch>
            <div className={style.foldersContent} >
              <Route exact path="/folders">
                <h3>Please select a folder.</h3>
              </Route>
              <Route path={`/folders/:id`}>
                <FoldersContent />

              </Route>
            </div>
          </Switch>
          <Switch>
            <div className={style.foldersRight} >
              <Route exact path="/folders/:id">
                <h3>Please select a file.</h3>
              </Route>
              <Route path={`/folders/:id/:fileId`}>


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
      .then(res => { setSubs(res.data.folderList); })

    Axios.get(`http://localhost:1212/api/file/${id}`)
      .then(res => { setFiles(res.data); })


  }, [id]);
  return (


    <div className={style.foldersItems}>
      <FoldersNavbar />

      {subs?.length == 0 && files?.length == 0 && <EmptyFolder />}
      <FoldersBox subs={subs} />
      <FilesBox RouteId={id} files={files} />
    </div>



  )
}
export default Folders