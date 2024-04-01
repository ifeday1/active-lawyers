import './App.css';
import Home from './pages/Home';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Services from './pages/Services';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/legal-services' element={<Services />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
