import './App.css';
import Home from './pages/Home';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Services from './pages/Services';
import Partners from './pages/Partners';
import Contact from './pages/Contact';
import Alternative from './pages/Alternative';
import Legal from './pages/Legal';
import Bankruptcy from './pages/Bankruptcy';
import Civil from './pages/Civil';
import Family from './pages/Family';
import Labour from './pages/Labour';
import Property from './pages/Property';
import Tax from './pages/Tax';
import Corporate from './pages/Corporate';
import Intellectual from './pages/Intellectual';
import Commercial from './pages/Commercial';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/legal' element={<Legal />}></Route>
          <Route path='/bankruptcy' element={<Bankruptcy />}></Route>
          <Route path='/legal-services' element={<Services />}></Route>
          <Route path='/alternative' element={<Alternative />}></Route>
          <Route path='/civil' element={<Civil />}></Route>
          <Route path='/family' element={<Family />}></Route>
          <Route path='/labour' element={<Labour />}></Route>
          <Route path='/property' element={<Property />}></Route>
          <Route path='/tax' element={<Tax />}></Route>
          <Route path='/corporate' element={<Corporate />}></Route>
          <Route path='intellectual' element={<Intellectual />}></Route>
          <Route path='commercial' element={<Commercial />}></Route>

          <Route path='/partners' element={<Partners />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
