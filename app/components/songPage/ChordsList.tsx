'use client';  
import { useState, useEffect, useRef } from 'react';
import { getTime, getMiliseconds, getPercentage } from '@/scripts/helperFunctions';
import Chord from '@/app/components/songPage/Chord'
import { animate } from "framer-motion"
import {Chords} from '@/app/lib/definitions';

export default function ChordsList(
    {chords, setCurrentChord, noteHeight, animation} : 
    { chords: Chords[], setCurrentChord: any, noteHeight: number, animation: any}) 
{
    
  return (
    <div className="ChordsList" >
         {chords.map((chord, index) => (
            <Chord 
                key={index}  
                inTime={chord.inTime}
                height={chord.notes * noteHeight}
                chordName={chord.name}
                setCurrentChord={setCurrentChord} 
                animation={animation}
            />  
        ))} 
    </div>
)}