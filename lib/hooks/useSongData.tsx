import {
    getProcessedChords, 
    getSongDuration, 
    getProcessedLyrics, 
    parseLyricsFromString, 
    parseChordsFromString } 
    from '@/scripts/helperFunctions'; 

import { Song } from '../definitions';
 
export default function useSongData({song} : {song: Song}) {

    const bpm = song.bpm;
    const notesPerBar = song.notesPerBar;
    const barsPerMinute = bpm / notesPerBar;
    const barDuration = 60000 / barsPerMinute;
    const noteDuration = barDuration / notesPerBar;
    const chordsArray = parseChordsFromString(song.chords);
    const lyricsArray = parseLyricsFromString(song.lyrics);

    let chords = getProcessedChords(chordsArray, noteDuration);
    let lyrics = getProcessedLyrics(lyricsArray, noteDuration);
    const duration = getSongDuration(chords);
    const bars = duration / barDuration;

    const songData = {
        name: song.name,
        bpm: bpm,
        notes: notesPerBar,
        bars: bars,
        chords: chords,
        lyrics: lyrics,
        barsPerMinute: barsPerMinute,
        barDuration: barDuration,
        noteDuration: noteDuration,
        duration: duration,
    }

    return {songData}
} 