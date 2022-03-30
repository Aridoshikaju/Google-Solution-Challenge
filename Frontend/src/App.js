import { useState } from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Landing from './Components/Landing';
import Auth from './Components/Login'

import './App.css';

function App() {

  const [loggedin,setLoggedin] = useState()
  const [token,setToken] = useState(false)
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/api/auth" element={<Auth />} />
          <Route path="/" element={<Landing />} >
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
