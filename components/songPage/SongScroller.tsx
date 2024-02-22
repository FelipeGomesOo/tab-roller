'use client';
import { useState, useEffect } from 'react';
import LyricsTimeline from '@/components/songPage/LyricsTimeline';  
import ChordsList from '@/components/songPage/ChordsList';  
import { Song } from '@/lib/definitions';

export default function SongScroller(
  {song, setCurrentChord, setCurrentLyric, animation, animationRef}: 
  {song: Song, setCurrentChord: any, setCurrentLyric: any, animation: any, animationRef: any}) 
{

  const [noteHeight, setNoteHeight] = useState(10);
  const lyricandChords = {
    paddingTop: "25svh",
  }
   
  return(
    <div  id="SongScroller" ref={animationRef}>
      <div className="flex" style={lyricandChords} >
        <LyricsTimeline 
          lyrics={song.lyrics} 
          noteHeight={noteHeight} 
          setCurrentLyric={setCurrentLyric}
        />
        <ChordsList  
          chords={song.chords} 
          noteHeight={noteHeight} 
          setCurrentChord={setCurrentChord}
          animation={animation}
        />
      </div> 
    </div> 
)}