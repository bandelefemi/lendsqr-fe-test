import React, {useEffect} from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { TooltipComponent } from '@syncfusion/ej2-react-popups'

import Login from './pages/login';
import Dashboard from './pages/dashboard';
import { Users } from './components';

function App() {


  
  
  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/dashboard/*' element={<Dashboard/>} />

        </Routes>

        {/* <Dashboard /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
