'use server';
import { z } from 'zod';
import prisma from '@/prisma/prisma';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { signIn } from '@/auth';
import { AuthError } from 'next-auth';
import { createUrl } from '@/scripts/helperFunctions';

const CreateSong = z.object({
    userId: z.coerce.number() ,
    artistId: z.coerce.number(),
    songName: z.string(),
    bpm: z.coerce.number(),
    notesPerBar: z.coerce.number(),
    songKey: z.string(),
    ChordInput: z.string(),
    LyricsInput: z.string(),
  });
    

export async function createSong(formData: FormData) {
    const { userId, artistId, songName, bpm, notesPerBar, songKey, ChordInput, LyricsInput } = CreateSong.parse({
            userId: formData.get('userId'),
            artistId: formData.get('artistId'),
            songName: formData.get('songName'), 
            bpm: formData.get('bpm'),
            notesPerBar: formData.get('notesPerBar'),
            songKey: formData.get('songKey'),
            ChordInput: formData.get('ChordInput'), 
            LyricsInput: formData.get('LyricsInput'),     
    });

    console.log(`userId: ${userId} , artistId: ${artistId} , songName: ${songName} , bpm: ${bpm} , notesPerBar: ${notesPerBar} , key: ${songKey} , ChordInput: ${ChordInput} , LyricsInput: ${LyricsInput} , url: ${createUrl(songName)}`);

    const createdSong = await prisma.song.create({
        data: {
          name: songName,
          artistId: artistId,
          url: createUrl(songName),
          bpm: bpm,
          notesPerBar:notesPerBar,
          key: songKey,
          chords:ChordInput,
          lyrics:LyricsInput,
          createdBy: userId,
          updatedBy: userId, 
        },
      }) 

      revalidatePath('/');
      redirect('/');  
}



export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    await signIn('credentials', formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.';
        default:
          return 'Something went wrong.';
      }
    }
    throw error;
  }
}