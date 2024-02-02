'use client';  
import { useEffect, useRef } from "react";

export default function Lyric(
    {phrase, currentLyric, index, setScrollTo} : 
    {phrase: string, currentLyric: number, index: number, setScrollTo: any}) 
{
    const ref = useRef<HTMLDivElement>(null);  
    const isCurrentLyric = currentLyric === index;
    const lyricElement = ref.current; 

    useEffect(() => { 
        const lyricHeight = lyricElement && lyricElement.offsetTop - (window.innerHeight * 0.25);

        if(isCurrentLyric){
            setScrollTo(lyricHeight);
        } 
    },[isCurrentLyric, lyricElement, setScrollTo]);
     
    return (
        <p ref={ref} className={`Lyric${isCurrentLyric ? ' active' : ''}`}>{phrase}</p> 
)}