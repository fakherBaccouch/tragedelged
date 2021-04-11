import './App.css';
import Folderspage from './pages/folderspage'
import Navbar from "./components/navbar/navbar"
import Sidenav from "./components/sidenav/sidenav"
import SignIn from "./components/logSection/signin/signin"
import 'semantic-ui-css/semantic.min.css'
import { useHistory } from "react-router-dom";
import './App.css';
import {useEffect, useState} from "react"
import { BrowserRouter as Router, Switch, Route, Link, useParams} from "react-router-dom";
import {UidContext} from './components/AppContext';
import Axios from 'axios';
import axios from 'axios';



function App() {
  const [uid,setUid]=useState(null);
  useEffect(()=>{
    axios({
      method: 'get',
      url:`${process.env.REACT_APP_API_URL}jwtid`,
      withCredentials: true
    })
    .then((res)=> {setUid(res.data);console.log(uid)})
    .catch((err)=> console.log('no token'))
  
      
},[uid]);
  let history = useHistory();
  const [isClicked,setIsClicked]=useState(true);
  const clickMe=()=>{
    setIsClicked(!isClicked);
    console.log(history.location.pathname)
  }

  return (
    <UidContext.Provider value={uid}>
          <div className="App">

      <Router>
        {history.location.pathname !== "/signin" && <Sidenav toggle={isClicked} />}
        <main >
          {history.location.pathname !== "/signin" && <Navbar toggle={() => clickMe()} />}
          <Switch>
            <Route exact path="/signin">          <SignIn />           </Route>
            <Route path="/folders">         <Folderspage />      </Route>
          </Switch>
        </main>
      </Router>
      </div>
    </UidContext.Provider>
  );
}

export default App;
