'use client';  
import { useState, useEffect, useRef } from 'react';
import { getTime, getMiliseconds, getPercentage } from '@/scripts/helperFunctions';
import Chord from '@/components/songPage/Chord'
import { animate } from "framer-motion"
import {Chords} from '@/lib/definitions';

export default function ChordsList(
    {chords, setCurrentChord, noteHeight, animation} : 
    { chords: Chords[], setCurrentChord: any, noteHeight: number, animation: any}) 
{
    
  return (
    <div id="ChordsList" className='w-full text-center text-2xl font-extrabold text-neutral-foreground '>
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