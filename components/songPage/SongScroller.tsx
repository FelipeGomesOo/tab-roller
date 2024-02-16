'use client';
import { useState, useEffect } from 'react';
import LyricsTimeline from '@/components/songPage/LyricsTimeline';  
import ChordsList from '@/components/songPage/ChordsList';  
import { Song } from '@/lib/definitions';

export default function SongScroller(
  {song, setCurrentChord, setCurrentLyric, animation}: 
  {song: Song, setCurrentChord: any, setCurrentLyric: any, animation: any}) 
{

  const [noteHeight, setNoteHeight] = useState(10);
   
  return(
    <>
      <div className="lyricChordContainer">
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
    </>
)}