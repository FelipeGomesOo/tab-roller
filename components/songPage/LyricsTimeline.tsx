'use client';  
import LyricDuration from '@/components/songPage/LyricDuration';
import { Lyrics } from '@/lib/definitions';
export default function LyricsTimeline(
  {lyrics, noteHeight, setCurrentLyric} : 
  {lyrics: Lyrics[], noteHeight: number, setCurrentLyric: any}) 
{

  return(
    <div className="LyricsTimeline"> 
            {lyrics.map((lyric, index) => (
                <LyricDuration 
                  key={index} 
                  height={lyric.notes * noteHeight} 
                  index={index}
                  setCurrentLyric={setCurrentLyric}
                />
            ))}
    </div>
)}