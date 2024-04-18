import './App.css';
import Home from './pages/Home';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Services from './pages/Services';
import Partners from './pages/Partners';
import Contact from './pages/Contact';
import Alternative from './pages/Alternative';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/legal-services' element={<Services />}></Route>
          <Route path='/alternative' element={<Alternative />}></Route>

          <Route path='/partners' element={<Partners />}></Route>

          <Route path='/contact' element={<Contact />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
