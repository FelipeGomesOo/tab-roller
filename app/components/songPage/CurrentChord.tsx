'use client'; 
import { useEffect } from 'react';  

export default function CurrentChord({chord}: {chord: string}) { 
/*     useEffect(() => {
        console.log(chord)
    }, [chord]) */

  return (
        <div className="CurrentChord">
            {chord} 
        </div> 
  )
}
