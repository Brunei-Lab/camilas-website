import React from 'react';
import Navbar from './components/Navbar';
import Presentation from './components/Presentation';
import DividedBlock from './components/DividedBlock';
import { contentsArray } from './assets/lib/texts';

function App() {
  const blockTypes = {
    "imageLeft": "imageLeft",
    "imageRight": "imageRight" 
  }

  return (
    <div className="App">
      <Navbar />
      <Presentation />
      <DividedBlock type={blockTypes.imageLeft} text={contentsArray[0]}/>
    </div>    
  );
}

export default App;
