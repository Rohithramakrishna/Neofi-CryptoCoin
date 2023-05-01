import React from 'react'
import Navbar from './component/navbar/Navbar'

import Page1 from './component/pages/Page1';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Page2 from './component/pages/Page2';



const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Page1 />}></Route>
          <Route path="/Page2" element={<Page2 />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
