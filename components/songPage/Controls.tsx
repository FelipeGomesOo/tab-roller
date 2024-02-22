'use client';   
import { useState } from 'react';
import Image from 'next/image'; 

export default function Controls({ animation } : { animation: any}) {

  const [isRuning, setIsRuning] = useState(false);

  const handlePlayPause = () => {
    isRuning ? animation.pause() : animation.play();
    setIsRuning(!isRuning)
  }
  const buttonIcon = (isRuning) ?  
  <Image width={26} height={37} src='/pause.svg' alt="Pause" /> : 
  <Image width={37} height={43}  src='/play.svg' alt="Play" />;

  return (
    <div id="Controls" className={`fixed bottom-5 left-5 z-50  ${isRuning && 'opacity-50'}`} > 
      <button className='bg-primary border-none w-24 h-24 rounded-full text-white flex items-center justify-center text-center' onClick={() => handlePlayPause()}>
        {buttonIcon}
      </button>      
    </div>
)}