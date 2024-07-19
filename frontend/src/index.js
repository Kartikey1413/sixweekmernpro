import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "./style.css"; 
import Myloginpage from './modules/auth/Myloginpage';
import Myregistorpage from './modules/auth/Myregistorpage';
import Mylandingpage from './modules/pages/Mylandingpage';
import Myerrorpage from './shares/Myerrorpage';
import Myhomepage from './modules/pages/Myhomepage';
import Serverpage from './modules/pages/Serverpage';
import Mycharts from './modules/pages/Mycharts';
import Detailspage from './modules/pages/Detailspage';





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Myloginpage/>}></Route>
        <Route path='registor' element={<Myregistorpage/>}></Route>
        <Route path='dashboard' element={<Mylandingpage/>}>
              <Route path='' element={<Myhomepage/>}/>
              <Route path='server' element={<Serverpage/>}/>
              <Route path='graph' element={<Mycharts/>}/>
              <Route path='view/:id' element={<Detailspage/>}/>
              <Route path='*' element={<Myerrorpage/>}/>
        </Route>
        <Route path='*' element={<Myerrorpage/>}/>
      </Routes>
    
    
    </BrowserRouter>

  
  </React.StrictMode>
);
