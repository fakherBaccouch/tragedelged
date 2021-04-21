import './App.css';
import Folderspage from './pages/folderspage'
import Navbar from "./components/navbar/navbar"
import Sidenav from "./components/sidenav/sidenav"
import SignIn from "./components/logSection/signin/signin"
import SignUp from "./components/logSection/signup/signup"
import 'semantic-ui-css/semantic.min.css'
import { useHistory } from "react-router-dom";
import './App.css';
import {useEffect, useState,useMemo} from "react"
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {UidContext} from './components/AppContext';
import axios from 'axios';
import PrivateRoute from "./privateRoute"
import {useUid} from "./components/AppContext"
import { UidProvider } from "./components/AppContext"

function App() {
  const [uid, setUid] = useState();

  useEffect(() => {

   
       axios({
        method: 'get',
        url: `${process.env.REACT_APP_API_URL}jwtid`,
        withCredentials: true
      })
        .then( (res) => { setUid(res.data); console.log('uid', uid) })
        .catch((err) => console.log('no token'))
        console.log("toekn", localStorage.getItem("jwtid"))

  }, []);


  let history = useHistory();
  const [isClicked, setIsClicked] = useState(true);
  const clickMe = () => {
    setIsClicked(!isClicked);
    console.log(history.location.pathname)
  }
  

  return (
    <UidContext.Provider value={uid}>
       <Router>

<div className="App">

<Sidenav toggle={isClicked} />

<main className={isClicked?"contentLess":"content"} >
<Navbar userid={uid}  toggled={isClicked} toggle={() => clickMe()} />
<Switch>
<PrivateRoute  path="/signin" component={SignIn} />
<PrivateRoute  path="/signup" component={SignUp} />
  <PrivateRoute    path="/folders">         <Folderspage />          </PrivateRoute>
</Switch>
</main>
</div>
</Router>

    </UidContext.Provider>
  );
}

export default App;
