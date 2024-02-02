'use client';   
import { Song } from '@/app/data/definitions';
import { getTime, getMiliseconds, getPercentage } from '@/scripts/helperFunctions';

export default function Info({song}:{song: Song}) {

    const percentage = 25;
    const percentageMs = getMiliseconds(percentage,song.duration);
  return (
    <>
      <div className="Info">
            <p>BPM: {song.bpm}</p>
            <p>Notes: {song.notes}</p>
            <p>Bars: {song.bars}</p>
            <p>Bars per Minute: {song.barsPerMinute}</p>
            <p>Bar duration: {Math.round(song.barDuration)}ms</p>
            <p>Note duration: {Math.round(song.noteDuration)}ms</p>
            <p>Full duration: {Math.round(song.duration)} ms</p>
            <p>Song duration: {getTime(song.duration)}</p>
            {/* <p>Current time: {getTime(currentTime)} {getPercentage(currentTime, song.duration)}%</p>
            <p>Current ms: {currentTime}</p> */}
      </div>
    </>
)}