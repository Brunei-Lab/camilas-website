import React from 'react';
import Navbar from './components/Navbar';
import Presentation from './components/Presentation';
import DividedBlock from './components/DividedBlock';
import Services from './components/Services';
import { contentsArray } from './assets/lib/content';
import Curriculum from './components/Curriculum';

function App() {
  const blockTypes = {
    "imageLeft": "imageLeft",
    "imageRight": "imageRight" 
  }

  return (
    <div className="App">
      <Navbar />
      <Presentation />
      <DividedBlock type={blockTypes.imageLeft} content={contentsArray[0]}/>
      <Services />
      <DividedBlock type={blockTypes.imageLeft} content={contentsArray[1]} />
      <Curriculum />

      {/* Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a> */}
    </div>    
  );
}

export default App;
