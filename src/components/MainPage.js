import * as React from 'react';
// import TopBar from './components/TopBar'
import OnlineCard from './OnlineCard'
import VolumeCard from './VolumeCard'
import SoundQualityCard from './SoundQualityCard'

import '../App.css';


export default function MainPage({state, handleChange, volume, setVolume, quality, setQuality}) {
  
  return (
    <div class="inner">
      <div class="main">
          <h1>Welcome User!</h1>
          <section class="cardBox">
            <div class="cards">
            <OnlineCard 
              title="Online mode" 
              body="Is this aplication connected to the internet?" 
              handleChange={handleChange} 
              state={state}
              />
            </div> 
            <div class="cards">
            <VolumeCard 
              title="Master Volume" 
              body="Overrides all other sound settings in this application" 
              volume={volume} 
              setVolume={setVolume}
              />
            </div> 
            <div class="cards">
            <SoundQualityCard 
              title="Sound Quality" 
              body="Manually control the music quality in event of poor connection" 
              quality={quality} 
              setQuality={setQuality}/>
            </div> 
          </section>
          <br></br>
          <p>System Notifications:</p>
            <ul>
              {(!state ? <li>Your application is offline. You won't be able to share or stream music to other devices</li> : '')} 
              {(volume>=80 ? <li>Listening to music at a high volume could cause long-term hearing loss.</li> : '')} 
              {(quality==="low" ? <li>Music quality is degraded. Increase quality if your connection allows it.</li> : '')} 
              
            </ul>
          
        </div>
      </div>
  );
}

