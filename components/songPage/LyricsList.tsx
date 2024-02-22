'use client';
import Lyric from '@/components/songPage/Lyric';
import { Lyrics } from '@/lib/definitions';
import { useEffect, useRef, useState } from "react";    

export default function LyricsList(
    {lyrics, currentLyric} : 
    {lyrics: Lyrics[], currentLyric: number}) 
{
    const ref = useRef<HTMLDivElement>(null);  
    const [scrollTo, setScrollTo] = useState(0);

    let offset = {
        paddingTop:"25svh"
      }
    //console.log(scrollTo, "scrollTo")
    useEffect(() => {
        const lyricsList = ref.current;
        if (lyricsList) {
            lyricsList.scrollTop = scrollTo;  
        }
    }, [scrollTo])

    return (
        <div id="LyricsList" style={offset} className="font-bold text-5xl fixed bottom-0 h-svh pl-5 overflow-y-scroll z-10 w-3/4 space-y-10" ref={ref}>
            {lyrics.map((lyric, index) => (
                <Lyric 
                    key={index} 
                    phrase={lyric.phrase} 
                    currentLyric={currentLyric} 
                    index={index}
                    setScrollTo={setScrollTo}
                />
            ))}
        </div>
)}