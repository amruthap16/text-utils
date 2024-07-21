

import { useState } from 'react';
import './App.css';
//import Another from './components/Another';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React from 'react';

function App() {
  const [mode, setMode]=useState('light');
  return (
    <>
    <Navbar title="Textutlis" mode={mode}/> 
    <div className="container my-3">
    <TextForm heading="enter your text to analyze below"/> 
    {/*<Another/>*/} 
      </div> 
    
    </>
  );
}
export default App;









