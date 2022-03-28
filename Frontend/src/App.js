import { BrowserRouter, Routes, Route} from "react-router-dom";
import Landing from './Components/Landing';
import Auth from './Components/Login'

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} exact>
          <Route path="/api/auth" element={<Auth />} />
          {/* <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
