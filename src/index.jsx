import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contact from "../src/Routes/Contact"
import Detail from "../src/Routes/Detail"
import Favs from "../src/Routes/Favs"
import Home from './Routes/Home';
import { ContextProvider } from './Components/utils/global.context';
// element={<Detail/>}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    <ContextProvider>
    <BrowserRouter>
        <Routes>

          <Route path='/' element={<App/>}>
            <Route path="/home"  element={<Home/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/detail/:id"  element={<Detail/>} />
            <Route path="/favs" element={<Favs/>} />
          </Route>
            
          

        </Routes>

    </BrowserRouter>
    </ContextProvider>
      
  </React.StrictMode>
);


