'use client';
import { useState} from 'react';
import SongScroller from '@/components/songPage/SongScroller';  
import CurrentChord from '@/components/songPage/CurrentChord';
import LyricsList from '@/components/songPage/LyricsList';
import Controls from '@/components/songPage/Controls';     
import { useSongAnimation } from '@/lib/hooks/useSongAnimation';
import { Song } from '@/lib/definitions';

export default function SongWindow({songData}: {songData: Song}) {
 
    const [currentChord, setCurrentChord] = useState("");
    const [currentLyricIndex, setCurrentLyricIndex] = useState(0); 
    const [animation, animationRef] = useSongAnimation({duration: songData.duration});

  return(
    <div id="SongWindow" className="overflow-hidden h-svh w-full" >
        <LyricsList 
            lyrics={songData.lyrics} 
            currentLyric={currentLyricIndex} 
        />   
        <CurrentChord 
            chord={currentChord} 
        />
        <Controls 
            animation={animation} 
        />
        <SongScroller  
            song={songData} 
            animation={animation}
            setCurrentChord={setCurrentChord} 
            setCurrentLyric={setCurrentLyricIndex}
            animationRef={animationRef}
        />
    </div>
)}