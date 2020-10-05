import React from 'react';
import styles from './assets/styles/App.scss';
import Navbar from './components/Navbar';
import Presentation from './components/Presentation';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Presentation />
    </div>    
  );
}

export default App;
