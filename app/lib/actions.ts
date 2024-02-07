'use server';
 
export async function createSong(formData: FormData) {
    const rawFormData = {
        userId: formData.get('userId'),
        artistId: formData.get('artistId'),
        songName: formData.get('songName'), 
        bpm: formData.get('bpm'),
        notesPerBar: formData.get('notesPerBar'),
        ChordInput: formData.get('ChordInput'), 
        LyricsInput: formData.get('LyricsInput'),     
    }; 
    console.log(rawFormData);
}