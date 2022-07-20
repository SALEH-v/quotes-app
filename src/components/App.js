import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Home from './Home';

import Login from './Login'

const App = () => (
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Navigate to="/login" />} />
    <Route path='/login' element={ <Login /> } />
    <Route path='/home' element={ <Home /> } />
  </Routes>
</BrowserRouter>


);

export default App;



