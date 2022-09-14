
import './App.css';
import React from 'react';
import {BrowserRouter,Routes,Route } from 'react-router-dom';

import Homepage from './Page/Homepage'
import Room from './Components/Room';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/room' element={<Room/>}/>
      {/* <Route path='/booking' element={<Booking/>}/> */}
    </Routes>

    </BrowserRouter>
  );
}

export default App;
