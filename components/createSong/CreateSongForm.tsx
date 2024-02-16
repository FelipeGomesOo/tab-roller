'use client';
import Link from 'next/link'; 
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { createSong } from '@/lib/actions'; 
import { Artist } from '@/lib/definitions'; 
import InputBlockLoop from '@/components/createSong/InputBlockLoop';
import SelectArtists from '@/components/createSong/SelectArtists';
import { useFormInput } from '@/lib/hooks';

export default function CreateSongForm({artists} : {artists: Artist[]}) {

  const songNameProps = useFormInput({ initialValue: "" });
  const bpmProps = useFormInput({ initialValue: 60 });
  const notesPerBarProps = useFormInput({ initialValue: 4 });
  const keyProps = useFormInput({ initialValue: "C" });

  return (
    <form action={createSong}>

      <SelectArtists artists={artists}  />
      <input type="hidden" name="userId" id="userId" value="1" />
 
      <div className="input">
        <label>Song Name</label><br />
        <input type="text" name="songName" id="songName" {...songNameProps} />
      </div>  
      <div className="input">
        <label>bpm</label><br />
        <input type="text" name="bpm" id="bpm" {...bpmProps} />
      </div>  
      <div className="input">
        <label>notesPerBar</label><br />
        <input type="text" name="notesPerBar" id="notesPerBar" {...notesPerBarProps} />
      </div>
      <div className="input">
        <label>Key</label><br />
        <input type="text" name="key" id="key" {...keyProps} />
      </div>
      <br /> <br /> <hr /> <br />

      <h3>Chords</h3>
      <InputBlockLoop type="Chord"/> 
      <br /> <br /> <hr /> <br />

      <h3>Lyrics</h3>
      <InputBlockLoop type="Lyrics"/>  

      <br /> <br /> <hr /> <br />

      

      <div className="">
        {/* <Link href="/" className="">Cancel</Link> */}
        <Button type="submit">Create Song</Button>
      </div>

    </form>
  );
}