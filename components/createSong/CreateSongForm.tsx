'use client';
import Link from 'next/link'; 
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input'; 
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardDescription, CardTitle } from '@/components/ui/card';
import { createSong } from '@/lib/actions'; 
import { Artist } from '@/lib/definitions'; 
import InputBlockLoop from '@/components/createSong/InputBlockLoop';
import SelectArtists from '@/components/createSong/SelectArtists';
import { useFormInput } from '@/lib/hooks/useFormInput';
import SelectKeys from '@/components/createSong/KeyList';

export default function CreateSongForm({artists, userId} : {artists: Artist[], userId: number}) {

  return (
      <form action={createSong}>
        <div className="flex gap-4 flex-wrap">
          <Card className='flex-auto  '>
            <CardHeader>
              <CardTitle>Song Details</CardTitle> 
            </CardHeader>
            <CardContent>
            <div className="grid w-full items-center gap-4">
              <SelectArtists artists={artists}  />
              <input type="hidden" name="userId" id="userId" value={userId} />
              
              <div className="">
                <Label htmlFor="songName">Song Name</Label>
                <Input type="text" name="songName" id="songName" />
              </div>
            
              <div className="">
                <Label htmlFor="bpm">BPM</Label>
                <Input type="text" name="bpm" id="bpm" placeholder="60" />
              </div>
            
              <div className="">
                <Label htmlFor="notesPerBar">Notes Per Bar</Label>
                <Input type="text" name="notesPerBar" id="notesPerBar" placeholder="4" />
              </div>
            
              <div className="">
                <Label>Key</Label>
                <SelectKeys />
              </div>
              </div>
            </CardContent>
          </Card> 

          <Card className='flex-auto '>
            <CardHeader>
              <CardTitle className='flex justify-between'>
                <span>Chords</span>
                <span>Duration</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <InputBlockLoop type="Chord"/>  
            </CardContent>
          </Card>
          <Card className='flex-auto'>
            <CardHeader>
              <CardTitle className='flex justify-between'>
                <span>Lyrics</span>
                <span>Duration</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <InputBlockLoop type="Lyrics"/>
            </CardContent>
          </Card>
        </div>
        <div className="w-full mt-4">
          {/* <Link href="/" className="">Cancel</Link> */}
          <Button type="submit">Create Song</Button>
        </div>

      </form> 
  );
}