// import Buttons from './components/Button'
// import Button from '@mui/material/Button';
import {useState, useEffect} from 'react';
import TopBar from './components/TopBar'
import LandingPage from './components/LandingPage'
import MainPage from './components/MainPage'
import OnlineCard from './components/OnlineCard'
import VolumeCard from './components/VolumeCard'
import SoundQualityCard from './components/SoundQualityCard'

import './App.css';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function App() {
  const [loggedIn, setLoggedIn] =useState(false) 
  const [state, setState] = useState(true);
  const [volume, setVolume] = useState(true);
  const [quality, setQuality] = useState(true);

  useEffect(()=>{
      console.log("state?: ", state)
  }, [state])

  const handleClick = (event) =>{
    event.preventDefault();
    console.log("quit clicking me!")
    setLoggedIn(!loggedIn)
    
  }

  const handleChange = (event) => {
      event.preventDefault();
      console.log("in OnlineCard handleChange()")
      setState(!state)
  }

  return (
    <div class="App" class="outer">
      <div>
        <TopBar/>
      </div>
      <div>
          {(!loggedIn ? 
            <LandingPage 
              handleClick={handleClick}/> : 
            <MainPage 
              handleChange={handleChange} 
              state={state} 
              volume={volume} 
              setVolume={setVolume} 
              quality={quality} 
              setQuality={setQuality}/>)}  
      </div>
    </div> 
  );
}

export default App;
