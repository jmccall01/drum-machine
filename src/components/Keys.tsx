import React from "react";
import {Audio} from '../types'

interface KeysProps {
    musicData: Audio;
    updateState: any;
}

function playSound(music: Audio){
    (document.getElementById(music.triggerKey) as HTMLAudioElement)?.play();
}

export default function Keys({musicData, updateState}: KeysProps){
    return(
        <button 
            className="drum-pad" 
            id={"pad-" + musicData.triggerKey}
            onClick={() => playSound(musicData)}
            onClickCapture={() => updateState(musicData.noiseName)}
            >
            <audio src= {musicData.url} id={musicData.triggerKey} className="clip"></audio>
            {musicData.triggerKey}
        </button>
    )
}