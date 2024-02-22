'use client'; 
import { useEffect } from 'react';  

export default function CurrentChord({chord}: {chord: string}) { 
  let offset = {
    top:"25svh"
  }

  return (
        <div id="CurrentChord" style={offset} className="fixed right-8 bg-primary text-2xl text-primary-foreground rounded-2xl text-center py-3 px-2 font-black min-w-14 transition-all duration-400 ease-in-out">
            {chord} 
        </div> 
  )
}
