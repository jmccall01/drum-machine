import { useState } from 'react'
import './App.css'
import {musicData} from './musicData'
import Keys from './components/Keys'

function App() {
  const [currentKey, setCurrentKey] = useState("");

  function playAudio(e: React.KeyboardEvent<HTMLDivElement>){
    const music = musicData.find((music) => music.triggerKey === e.key.toUpperCase());
    if (!music){
      return null;
    }
    (document.getElementById(music.triggerKey) as HTMLAudioElement)?.play();
    document.getElementById("pad-" + music.triggerKey)?.focus();
    setCurrentKey(music.noiseName);
}

  return (
    <>
      <div className="container" id="drum-machine" onKeyDown={playAudio}>
        <h1>Drum Machine - Josh McCall</h1>
        <div className='content'>
          <div className='complete-drum'>
            {musicData.map((music)=> (
              <Keys 
                musicData = {music} 
                key={music.triggerKey}
                updateState = {setCurrentKey}
              />
            ))}
          </div>
          <div id="display" className="display">
              <p className='keyName'>{currentKey}</p>
          </div>
        </div>
        
      </div>
    </>
  )
}

export default App
