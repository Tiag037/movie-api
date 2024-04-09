import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './pages/Home';
import Favourites from './pages/Favourites';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/favourites" element={<Favourites/>} />
      {/* path="*" fonctionne si jamais l'url ne correspond à rien de déclaré au dessus */}
      <Route path="*" element={<Home />} />
    </Routes>
  </BrowserRouter>
  );
};

export default App;
