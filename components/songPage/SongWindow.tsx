'use client';
import { useState, useEffect, useRef } from 'react';
import SongScroller from '@/components/songPage/SongScroller';  
import CurrentChord from '@/components/songPage/CurrentChord';
import LyricsList from '@/components/songPage/LyricsList';
import Controls from '@/components/songPage/Controls';  
import SongData from '@/lib/SongData';  
import {  animate } from "framer-motion";

const {chords, lyrics, duration} = SongData; 

export default function SongWindow() { 
    const [currentChord, setCurrentChord] = useState("");
    const [currentLyricIndex, setCurrentLyricIndex] = useState(0);
    const [animation, setAnimation] = useState<any>(null);

    const animationRef = useRef<any>(); 

    useEffect(() => {
        
        const animation = animate(animationRef.current, 
            { transform: ["translateY(0)","translateY(-100%)"]},
            { duration: duration / 1000, ease: "linear" }
        
        );  
        setAnimation(animation)
          
        // Controll animation timeline with mouse wheel
        const wheelTimeline = (e: WheelEvent) => { 
            let timeChange = e.deltaY ; 
            animation.time += timeChange / 250; 
            //setProgress((old) => old + (timeChange))
            console.log(timeChange, 'time change')
        };

        // Controll animation timeline with swipe gesture
        let startTouchPosition: number | null = null;

        const touchStartTimeline = (e: TouchEvent) => {
            startTouchPosition = e.touches[0].clientY;
        };

        const touchMoveTimeline = (e: TouchEvent) => {
            if (startTouchPosition === null) {
                return;
            }
            let touchChange = startTouchPosition - e.touches[0].clientY;
            animation.time += touchChange / 1000; 
            console.log(touchChange, 'touch change')
            //startTouchPosition = null;
        };

        window.addEventListener('wheel', wheelTimeline);
        window.addEventListener('touchstart', touchStartTimeline);
        window.addEventListener('touchmove', touchMoveTimeline);

        animation.pause();

        return () => {
            window.removeEventListener('wheel', wheelTimeline);
            window.removeEventListener('touchstart', touchStartTimeline);
            window.removeEventListener('touchmove', touchMoveTimeline);
        }
    }, []) 

  return(
  <> 
    <div className="SongWindow" id="SongWindow">
        <LyricsList lyrics={lyrics} currentLyric={currentLyricIndex}/>   
        <CurrentChord chord={currentChord}/>
        <Controls animation={animation}  />
        <div className='SongScroller' id="SongScroller" ref={animationRef}>
            <SongScroller  
                song={SongData} 
                animation={animation}
                setCurrentChord={setCurrentChord} 
                setCurrentLyric={setCurrentLyricIndex}
            />
        </div>   
    </div>
  </>
)}