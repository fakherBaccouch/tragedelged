import './App.css';
import {useLocation } from 'react-router-dom'
import { Roller } from 'react-awesome-spinners'

import Folderspage from './pages/folderspage'
import Profilepage from './pages/profilepage'
import Navbar from "./components/navbar/navbar"
import Sidenav from "./components/sidenav/sidenav"
import SignIn from "./components/logSection/signin/signin"
import SignUp from "./components/logSection/signup/signup"
import 'semantic-ui-css/semantic.min.css'
import { Redirect, useHistory } from "react-router-dom";
import './App.css';
import {useEffect, useState,useMemo} from "react"
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {UidContext} from './components/AppContext';
import axios from 'axios';
import PrivateRoute from "./privateRoute"
import {useUid} from "./components/AppContext"
import { UidProvider } from "./components/AppContext"
import setData from "react"
function App() {
  const [uid, setUid] = useState(null);
  const [loading,setLoading]=useState(false)
  useEffect(() => {
    setLoading(true)
 axios({
        method: 'get',
        url: `${process.env.REACT_APP_API_URL}jwtid`,
        withCredentials: true
      })
      .then(
        res => {
             if(res.data.status == false){
               setUid(false)
             }else{
              setUid(res.data)

             }
            }
    ).catch(
      (errors)=>
      console.log(errors)
    )

  }
  , []);
useEffect(
  ()=>{    
    if(uid !== null){
      setLoading(false)
    }
  },[uid])




 let history = useHistory();
  const [isClicked, setIsClicked] = useState(false);
  const clickMe = () => {
    setIsClicked(!isClicked);
  }

  const location = useLocation();
  
{ if(loading || uid == null){return <div>Loading ..</div> }
else if( uid == false){
 if(location.pathname == '/signup'){
   return <SignUp/>
 }else{
   return <SignIn/>
 }
}else{
  return  (
    <UidContext.Provider value={uid}>
    <Router>

<div className="App">

<Sidenav toggle={isClicked} />

<main className={isClicked?"contentLess":"content"} >
<Navbar userid={uid}  toggled={isClicked} toggle={() => clickMe()} />
<Switch>
<Route  path="/signin" component={SignIn} />
<Route  path="/signup" component={SignUp} />
<Route    path="/folders">         <Folderspage />          </Route>
<Route    path="/profile">         <Profilepage />          </Route>
</Switch>
</main>
</div>
</Router>

 </UidContext.Provider>
  )
}





}     





}

export default App;
