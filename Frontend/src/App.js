import { useState } from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Landing from './Components/Landing';
import Auth from './Components/Login'
import Producer from './Components/Producer'
import Consumer from './Components/Consumer'


import './App.css';

const storedData = JSON.parse(localStorage.getItem("userData"));
let damm = false; //user does not exists
if (storedData && storedData.token) {
  damm = storedData.who;
}


function App() {
  const [token,setToken] = useState(false)
  const storedData = JSON.parse(localStorage.getItem("userData"));
  let damm = false; //user does not exists
  if (storedData && storedData.token) {
    damm = storedData.who;
  }
  const [whoLogged, setWhoLogged] = useState(damm); //NUll means no is looged in
  if (!whoLogged && damm) {
    setWhoLogged(damm);
  }
  console.log("printing now..",whoLogged)
  
  return (
    // <BrowserRouter>
    //   <Routes>
    //       <Route path="/api/auth" element={<Auth />} />
    //       <Route path="/" element={<Landing />} >
    //     </Route>
    //   </Routes>
    // </BrowserRouter>
<BrowserRouter>
    <Routes>
      <Route path="/" element={<Landing />}/>
      {(whoLogged=="hotel")?(
        <Route path="provider"  element={<Producer/>} />
      ):(null)}
      {(whoLogged=="user")?(
        <Route path="consumer" element={<Consumer/>}/>
      ):(null)}
          {/* <Route path=":teamId" element={<Team />} /> */}
          <Route path="api/auth" element={<Auth />} />
          {/* <Route path="" element={<LeagueStandings />} /> */}
        {/* </Route> */}
      {/* </Route> */}
    </Routes>
  </BrowserRouter>
  );
}

export default App;
