'use client';  
import { useState, useEffect, useRef } from 'react';
import { useInView } from "framer-motion"

export default function Chord(
    {inTime, height, chordName, setCurrentChord, animation}: 
    {inTime: number, height: number, chordName: string, setCurrentChord : any, animation: any}) {
    
    const ref = useRef<HTMLDivElement>(null);   
    

    const isInView = useInView(ref, { margin: "-25.5%  0px -74.5% 0px ", amount: 0, once: false});
    
    useEffect(() => {
        if (isInView) {
            setCurrentChord(chordName);
        }
    }, [isInView, setCurrentChord, chordName]);

    const handleClick = () => { 
        animation.time = inTime / 1000;
        //console.log(animation.time ,'Chord clicked') 
    }
 
  return (
    <div  
        ref={ref}
        className={`Chord ${isInView ? "active" : ""}`}
        id={`chord${inTime}`}
        style={{ height: `${height}vh` }}
        onClick={() => handleClick()} 
    >
        <span className="ChordName">{chordName}</span> 
        <span className="ChordBar">&nbsp;</span> 
    </div>
)}