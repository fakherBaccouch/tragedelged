import { React, useEffect, Component } from "react";
import ReactDOM from "react-dom";
import { $, jQuery } from 'jquery';
import SidebarItem from '../sidebarItem/sidebarItem.js'
import style from './sidebar.module.scss'
import FolderIcon from '@material-ui/icons/Folder';
import GetAppRoundedIcon from '@material-ui/icons/GetAppRounded';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
const items = [{
  "_id": {
    "$oid": "6066f6b1b698a2501880bd35"
  },
  "status": false,
  "sub": [
    {
      "status": false,
      "sub": [
        {
          "status": false,
          "sub": [],
          "_id": {
            "$oid": "6"
          },
          "name": "1/11/111/1111",
          "father": "1/11/111",
          "createdAt": {
            "$date": "2021-04-02T11:10:07.788Z"
          },
          "updatedAt": {
            "$date": "2021-04-02T11:10:07.788Z"
          },
          "__v": 0
        }
      ],
      "_id": {
        "$oid": "6066fb7fbc6dbe60b05e2cc2"
      },
      "name": "1/11/111",
      "father": "1/11",
      "createdAt": {
        "$date": "2021-04-02T11:09:51.018Z"
      },
      "updatedAt": {
        "$date": "2021-04-02T11:10:07.804Z"
      },
      "__v": 0
    },
    {
      "status": false,
      "sub": [],
      "_id": {
        "$oid": "6066fbc0bc6dbe60b05e2cc4"
      },
      "name": "1/11/112",
      "father": "1/11",
      "createdAt": {
        "$date": "2021-04-02T11:10:56.610Z"
      },
      "updatedAt": {
        "$date": "2021-04-02T11:10:56.610Z"
      },
      "__v": 0
    },
    {
      "status": false,
      "sub": [
        {
          "status": false,
          "sub": [],
          "_id": {
            "$oid": "6066fbe5bc6dbe60b05e2cc6"
          },
          "name": "1/11/113/1131",
          "father": "1/11/113",
          "createdAt": {
            "$date": "2021-04-02T11:11:33.169Z"
          },
          "updatedAt": {
            "$date": "2021-04-02T11:11:33.169Z"
          },
          "__v": 0
        },
        {
          "status": false,
          "sub": [],
          "_id": {
            "$oid": "6066fd2f05c0aa61e0d9b794"
          },
          "name": "1/11/113/1132",
          "father": "1/11/113",
          "createdAt": {
            "$date": "2021-04-02T11:17:03.442Z"
          },
          "updatedAt": {
            "$date": "2021-04-02T11:17:03.442Z"
          },
          "__v": 0
        }
      ],
      "_id": {
        "$oid": "6066fbdcbc6dbe60b05e2cc5"
      },
      "name": "1/11/113",
      "father": "1/11",
      "createdAt": {
        "$date": "2021-04-02T11:11:24.404Z"
      },
      "updatedAt": {
        "$date": "2021-04-02T11:17:03.642Z"
      },
      "__v": 0
    },
    {
      "status": false,
      "sub": [],
      "_id": {
        "$oid": "6066fd6405c0aa61e0d9b795"
      },
      "name": "1/11/114",
      "father": "1/11",
      "createdAt": {
        "$date": "2021-04-02T11:17:56.870Z"
      },
      "updatedAt": {
        "$date": "2021-04-02T11:17:56.870Z"
      },
      "__v": 0
    }
  ],
  "name": "1/11",
  "father": "1",
  "createdAt": {
    "$date": "2021-04-02T10:49:21.441Z"
  },
  "updatedAt": {
    "$date": "2021-04-02T11:17:56.885Z"
  },
  "__v": 0
}];



class Folders extends Component {


  render() {
    return (
      <div className={style.folders}>
                <Router>

        <div className={style.tree} >
          <ul >
            {items.map((i) => (
              <SidebarItem  item={i} key={i.id} />
            ))}
          </ul>
         </div>



          <Switch>
            <div className={style.foldersContent} >
              <Route exact path="/folders">
                <h3>Please select a topic.</h3>
              </Route>
              <Route exact path={`/folders/:id`}>
                <FolderItem />
              </Route>
            </div>
          </Switch>




        </Router>
      </div>
    )
  }
};

const FolderItem = ({ myId }) => {
  let { id } = useParams();

  return (
   <>
<div className={style.pfc_content_item}>
          <img src="/giff.gif" />
             <h5>Electricité</h5>
      
          <GetAppRoundedIcon/>
      </div><div className={style.pfc_content_item}>
          <img src="/giff.gif" />
             <h5>Electricité</h5>
      
          <GetAppRoundedIcon/>
      </div><div className={style.pfc_content_item}>
          <img src="/giff.gif" />
             <h5>Electricité</h5>
      
          <GetAppRoundedIcon/>
      </div><div className={style.pfc_content_item}>
          <img src="/giff.gif" />
             <h5>Electricité</h5>
      
          <GetAppRoundedIcon/>
      </div><div className={style.pfc_content_item}>
          <img src="/giff.gif" />
             <h5>Electricité</h5>
      
          <GetAppRoundedIcon/>
      </div>
      <div className={style.pfc_content_item}>
          <img src="/giff.gif" />
             <h5>Electricité</h5>
      
          <GetAppRoundedIcon/>
      </div>
      <div className={style.pfc_content_item}>
          <img src="/giff.gif" />
             <h5>Electricité</h5>
      
          <GetAppRoundedIcon/>
      </div>
      <div className={style.pfc_content_item}>
          <img src="/giff.gif" />
             <h5>Electricité</h5>
      
          <GetAppRoundedIcon/>
      </div>
      
      DISPLAY SUB FOLDERS OF ID ={id}

</> 
  )
}
export default Folders