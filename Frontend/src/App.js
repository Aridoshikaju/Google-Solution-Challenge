import { useState } from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Landing from './Components/Landing';
import Auth from './Components/Login'

import './App.css';

const storedData = JSON.parse(localStorage.getItem("userData"));
let damm = false; //user does not exists
if (storedData && storedData.token) {
  damm = storedData.who;
}


function App() {

  const [whoLogged,setWhoLogged] = useState()
  const [token,setToken] = useState(false)
  const storedData = JSON.parse(localStorage.getItem("userData"));
  
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
        <Route path="provider"  element={"Provider"} />
        <Route path="consumer" element={"Consumer"}/>
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
