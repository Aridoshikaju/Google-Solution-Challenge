// import Partner from './Components/landing/Partner';
// import Provider from './Components/Provider';
// import Consumer from './Components/Consumer';
// import ReactDOM from 'react-dom';
import './App.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
// import Cards from './Components/news/Cards';
// import News_Add from './Components/Admin/News_Add';
import Landing from './Components/Landing';
import News from './Components/News';
import Mission from './Components/Mission';
import Admin from './Components/Admin';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Landing/>
      <Mission/>
      <News/>
      <Footer/>
      {/* <Provider/> */}
      {/* <Admin/> */}
      
    </div>
  );
}

export default App;
