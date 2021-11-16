// import Buttons from './components/Button'
// import Button from '@mui/material/Button';
import {useState} from 'react';
import TopBar from './components/TopBar'
import LandingPage from './components/LandingPage'
import MainPage from './components/MainPage'
import OnlineCard from './components/OnlineCard'
import VolumeCard from './components/VolumeCard'
import SoundQualityCard from './components/SoundQualityCard'

import './App.css';

function App() {
  const [loggedIn, setLoggedIn] =useState(false)
  const [state, setState] = useState(true);
  const [volume, setVolume] = useState(true);
  const [quality, setQuality] = useState(true);
  return (
    <div className="App" class="outer">
      <div>
        <TopBar/>
      </div>
      <div>
      <LandingPage loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>
      </div>
      {/* <div class="inner">
        <MainPage state={state} setState={setState} volume={volume} setVolume={setVolume} quality={quality} setQuality={setQuality} />
      </div> */}
      {!state && <p>Is currently off line</p>}
    </div>
  );
}

export default App;
