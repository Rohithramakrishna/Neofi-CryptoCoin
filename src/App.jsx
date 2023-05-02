import React from 'react'
import Navbar from './component/navbar/Navbar'

import Page1 from './component/pages/Page1';
import { BrowserRouter,Routes,Route } from 'react-router-dom';




const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Page1 />}></Route>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
