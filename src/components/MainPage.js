import * as React from 'react';
// import TopBar from './components/TopBar'
import OnlineCard from './OnlineCard'
import VolumeCard from './VolumeCard'
import SoundQualityCard from './SoundQualityCard'

import '../App.css';


export default function MainPage(state, setState, volume, setVolume, quality, setQuality) {
  return (
    <div class="main">
        <h1>Welcome User!</h1>
        <section class="cardBox">
          <div class="cards">
          <OnlineCard title="Online mode" body="Is this aplication connected to the internet?" state={state} setState={setState}/>
          </div> 
          <div class="cards">
          <VolumeCard title="Master Volume" body="Overrides all other sound settings in this application" volume={volume} setVolume={setVolume}/>
          </div> 
          <div class="cards">
          <SoundQualityCard title="Sound Quality" body="Manually control the music quality in event of poor connection" quality={quality} setQuality={setQuality}/>
          </div> 
        </section>
        <br></br>
        <p>System Notifications:</p>
      </div>
  );
}

