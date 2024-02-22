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
    id: string;
    name: string;
    bpm: number,
    notesPerBar: number,
    bars: number,
    chords: Chords[],
    lyrics: Lyrics[],
    barsPerMinute: number,
    barDuration: number,
    noteDuration: number,
    duration: number,  
    url: string,
    artistId: number,  
    key: string, 
    createdAt: Date,
    updatedAt: Date,
    createdBy: number,
    updatedBy: number,
    views: number,
}

export type Artist = {
    id: number,
    name: string,
    views: number
}

export type User = {
    id: number,
    name: string,
    email: string,
    password: string
}