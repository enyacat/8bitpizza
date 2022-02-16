import './App.css';
import "nes.css/css/nes.min.css";

import { useState } from 'react';
import Title from './Components/Title';
import Menu from './Components/Menu';

function App() {
  const [openFood, setOpenFood] = useState();
  return (
    <div className="App">
      <Title />
      <Menu openFood={openFood} setOpenFood={setOpenFood} />


    </div>
  )
}

export default App;
