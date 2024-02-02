export type Chords = { 
    name: string,
    notes: number,
    duration: number,
    inTime: number,
    outTime: number
}
export type Lyrics = {
    phrase: string,
    notes: number,
    duration: number,
    inTime: number,
    outTime: number
}
export type Song = {
    bpm: number,
    notes: number,
    bars: number,
    chords: Chords[],
    lyrics: Lyrics[],
    barsPerMinute: number,
    barDuration: number,
    noteDuration: number,
    duration: number
}