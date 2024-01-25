import './App.css';
import React, { useState } from 'react';
import Random from './component/Random';
import Tag from './component/Tag';

function App() {

  return (
   <div className='App'>
    <div className='heading'>
      <h1>RANDOM GIFS</h1>
    </div>
    <div className='random'>
      <Random></Random>
    </div>
    <div className='tag'>
      <Tag></Tag>
    </div>
   </div>
  );
}

export default App;