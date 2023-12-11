import './App.css';
import Topbar from './Components/Topbar/Topbar';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Login from '../src/Pages/Login';
import DestinationCate from '../src/Pages/DestinationCate'
import Product from '../src/Pages/Product'
import Footer from './Components/Footer/Footer';
import Trip_Banner from './Components/Assets/banner2.png'
import Trip_Banner1 from './Components/Assets/banner1.png'
import AttractTrip from './Pages/Attracttrip';
import Contact from './Pages/Contact';

function App() {
  return (
    <div>

      <BrowserRouter>
      <Topbar />
        <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/Destination' element={<DestinationCate Banner={Trip_Banner}  category='Destination'/>}/>
        <Route path='/Attract' element={<AttractTrip Banner={Trip_Banner1} category='Attract'/>}/> 
        <Route path='/contact' element={<Contact />}/>
        <Route path='/package' element={<Product />}>

       
        

      </Route>

      

      <Route path='/login' element={<Login />}/>
      
        </Routes>
        
        <Footer />  
        
      
      </BrowserRouter>
     
      
     
      
     
      
    </div>
  );
}

export default App;
