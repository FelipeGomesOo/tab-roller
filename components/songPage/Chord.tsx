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
        className='relative'
        style={{ height: `${height}vh` }}
        onClick={() => handleClick()} 
    >
        <span className={`${isInView && "opacity-0"} absolute right-8 top-0 bg-neutral rounded-2xl py-3 px-2 min-w-14 transition-all duration-400 ease-in-out`}>
            {chordName}
        </span> 
        <span id="ChordBar" className={`${isInView ? "bg-primary" : "bg-neutral"}  h-full absolute w-4 rounded-xl right-0 transition-all duration-400 ease-in-out`}>
            &nbsp;
        </span> 
    </div>
)}