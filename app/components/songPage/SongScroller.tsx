'use client';
import { useState, useEffect } from 'react';
import LyricsTimeline from '@/app/components/songPage/LyricsTimeline';  
import ChordsList from '@/app/components/songPage/ChordsList';  
import { Song } from '@/app/data/definitions';

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