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
    key: z.string(),
    ChordInput: z.string(),
    LyricsInput: z.string(),
  });
    

export async function createSong(formData: FormData) {
    const { userId, artistId, songName, bpm, notesPerBar, key, ChordInput, LyricsInput } = CreateSong.parse({
            userId: formData.get('userId'),
            artistId: formData.get('artistId'),
            songName: formData.get('songName'), 
            bpm: formData.get('bpm'),
            notesPerBar: formData.get('notesPerBar'),
            key: formData.get('key'),
            ChordInput: formData.get('ChordInput'), 
            LyricsInput: formData.get('LyricsInput'),     
    }); 
    await prisma.song.create({
        data: {
            name: songName,
            artistId: artistId,
            url: createUrl(songName),
            bpm: bpm,
            notesPerBar:notesPerBar ,
            key: key,
            chords:ChordInput ,
            lyrics:LyricsInput ,
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