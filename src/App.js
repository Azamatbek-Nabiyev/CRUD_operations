import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Add from './components/add/Add';
import Update from './components/update/Update';
import Read from './components/read/Read';

function App() {
  return (
    <BrowserRouter>
      <div className='main'>
      <Routes>
        <Route path='/' element={<Read />}  />
        <Route path='/update' element={<Update />}  />
        <Route path='/add' element={<Add />}  />
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
