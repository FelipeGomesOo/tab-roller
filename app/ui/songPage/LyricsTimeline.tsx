'use client';  
import LyricDuration from '@/app/ui/songPage/LyricDuration';
import { Lyrics } from '@/app/lib/definitions';
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