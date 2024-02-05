import {getProcessedChords, getSongDuration, getProcessedLyrics} from '@/scripts/helperFunctions';
import chordsArray from '@/app/lib/data/chords';  
import lyricsArray from '@/app/lib/data/lyrics';  

const bpm = 74;
const notesPerBar = 4;

const barsPerMinute = bpm / notesPerBar;
const barDuration = 60000 / barsPerMinute;
const noteDuration = barDuration / notesPerBar;

let chords = getProcessedChords(chordsArray, noteDuration);
let lyrics = getProcessedLyrics(lyricsArray, noteDuration);
const duration = getSongDuration(chords);
const bars = duration / barDuration;

const song = {
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

export default song;