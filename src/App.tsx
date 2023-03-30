import React, { useState } from 'react';
import { Routes, Route, useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import AppWrapper from './Components/Common/AppWrapper';
import Layout from './Components/Common/Layout';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Information from './Components/Information';
import Login from './Components/Login';
import { useEffect } from 'react';



const App = () =>{

  const location = useLocation();
  const navigate = useNavigate();
  const [params, setParams] = useSearchParams();
  const [name, setName] = useState('');

  // console.log(location,'location');
  // console.log(params.get('name'), 'params');
   
  useEffect (() => {
    if(location.pathname === '/information'){
      // alert ('Prohibitted area');\
      navigate ('/login');    
    }
  }, [location, navigate]);

  useEffect (() => {
    setName(params.get('name') || '');
  }, [params]); 

  return (
    
      <AppWrapper>
        <Layout>
          {name}
          <Routes>

            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About/>} />
            <Route path="/about/:user_id" element={<About/>} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/information" element={<Information/>} />
            <Route path="/login" element={<Login />} />

          </Routes>
        </Layout>
      </AppWrapper>
    
  )
}

export default App;