import { React, useEffect, useContext,useState } from "react";
import {UidContext} from '../AppContext';
import Axios from 'axios';
import { Grid, Segment } from 'semantic-ui-react'

const Profile = () => {
    const  uid  = useContext(UidContext);
    const [user, setUser] = useState({});

  useEffect( () => {     
      Axios.get(`http://localhost:1212/api/user/${uid}`,{
         withCredentials: true
      }).then(res => { setUser(res.data);})  

  }, []);
  
  return (
      <div style={{margin:"10px"}}>
    <Grid columns={3} divided>
    <Grid.Row stretched>
      <Grid.Column>
        <Segment>1</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>{user.username}</Segment>
        <Segment>2</Segment>
      </Grid.Column>
      <Grid.Column>
          {user && user.fileNotif.map(user =>{
  return <Segment>{user._id} </Segment>
          })}
      </Grid.Column>
    </Grid.Row>
  </Grid>
  </div>
  )
}
export default Profile