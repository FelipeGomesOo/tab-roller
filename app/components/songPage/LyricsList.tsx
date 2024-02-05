'use client';
import Lyric from '@/app/components/songPage/Lyric';
import { Lyrics } from '@/app/lib/definitions';
import { useEffect, useRef, useState } from "react";    

export default function LyricsList(
    {lyrics, currentLyric} : 
    {lyrics: Lyrics[], currentLyric: number}) 
{
    const ref = useRef<HTMLDivElement>(null);  
    const [scrollTo, setScrollTo] = useState(0);

    //console.log(scrollTo, "scrollTo")
    useEffect(() => {
        const lyricsList = ref.current;
        if (lyricsList) {
            lyricsList.scrollTop = scrollTo;  
        }
    }, [scrollTo])
    return (
        <div className="LyricsList" ref={ref}>
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