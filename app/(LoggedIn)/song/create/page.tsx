import CreateSongForm from '@/app/components/createSong/CreateSongForm';
import {getArtists} from '@/app/lib/data';

export default async function CreateSongPage() { 
  let artists = await getArtists();
  
  return (
    <>
     <CreateSongForm artists={artists} /> 
    </>
)};