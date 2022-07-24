import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Home from './Home';
import Login from './Login'
import NotFound from './NotFound';

// import { UserContext } from './UserContext';




const App = () => (


  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Navigate to="/login" />} />
      <Route path='/login' element={ <Login /> }/>
      <Route path='/home/:user' element={ <Home /> } />
      <Route path='*' element={<NotFound />} />
    </Routes>
  </BrowserRouter>


  );




export default App;



