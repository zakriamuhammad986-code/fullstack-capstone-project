import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import MainPage from './components/MainPage/MainPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/app" element={<MainPage />} />
      </Routes>
    </>
  );
}

export default App;
