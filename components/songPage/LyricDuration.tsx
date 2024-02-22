'use client';  
import { useState, useEffect, useRef } from 'react';
import { useInView } from "framer-motion"

export default function LyricDuration(
    {height, index, setCurrentLyric}: 
    {height: number, index:number, setCurrentLyric:any})
{  
    
    const ref = useRef<HTMLDivElement>(null);   
    const InView = useInView(ref, { margin: "-25.5%  0px -74.5% 0px ", amount: 0, once: false});

    const LyricDuration = {
        height: `${height}vh`
    }
    useEffect(() => {
        if (InView) {
            setCurrentLyric(index);
        }
    },[InView, setCurrentLyric, index])

    return (
        <div
            ref={ref}  
            style={LyricDuration}
            className={`${InView && "inview"}`} 
        >
                &nbsp;
        </div> 
)}