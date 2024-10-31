import './App.css';
import Navbar from './components/layout/Navbar';
import Country from './components/countries/Country';
import CountryCreatepage from './components/countries/CountryCreatepage';
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import StaHome from './components/states/StaHome';
import StaCreatepage from './components/states/StaCreatepage';
import CityHome from './components/cities/CityHome';
import CityCreatepage from './components/cities/CityCreatepage';
import React from 'react';
function App() {
  return (
    <Router>
    <div className="App">
    <Navbar/>
       <Routes>
     <Route path="/Country" element={<Country/>} exact />
     <Route path="/countries/CountryCreatepage" element={<CountryCreatepage/>} exact />
     <Route path="/countries/CountryCreatepage/:id" element={<CountryCreatepage/>} exact />
     <Route path="/StaHome" element={<StaHome/>} exact />
     <Route path="/StaCreatepage" element={<StaCreatepage/>} exact />
     <Route path="/states/StaCreatepage/:id" element={<StaCreatepage/>} exact />
     <Route path="/CityHome" element={<CityHome/>} exact />
     <Route path="CityCreatepage" element={<CityCreatepage/>} exact />
     <Route path="/cities/CityCreatepage/:id" element={<CityCreatepage/>} exact />
     </Routes> 
     </div>
    </Router> 
  );
}

export default App;
