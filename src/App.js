import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'

import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from './Pages/Home';
import Faqs from './Pages/Faqs';

function App() {
  return (
    <>
    <BrowserRouter basename='/Driving-School'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Faqs' element={<Faqs/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
