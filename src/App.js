import React from 'react';
import Navbar from './components/Navbar';
import Presentation from './components/Presentation';
import DividedBlock from './components/DividedBlock';

function App() {
  const contentsArray = [
    {
      title: "Quando procurar um psiquiatra?",
      paragraph: `Cat ipsum dolor sit amet, rub my belly hiss and thug cat cats are fats 
                i like to pets them they like to meow back. While happily ignoring when 
                being called hack meowing chowing and wowing. Meow meow we are 3 small 
                kittens sleeping most of our time, we are around 15 weeks old i think, 
                i don’t know i can’t count poop on couch or stretch out on bed for chase 
                dog then run away for annoy kitten brother with poking. `
    }
  ]
  return (
    <div className="App">
      <Navbar />
      <Presentation />
      <DividedBlock text={contentsArray[0]}/>
    </div>    
  );
}

export default App;
