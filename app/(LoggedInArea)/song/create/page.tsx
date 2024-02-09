import CreateSongForm from '@/app/ui/createSong/CreateSongForm';
import {getArtists} from '@/app/lib/data';

export default async function CreateSongPage() { 
  let artists = await getArtists();
  
  return (
    <>
     <CreateSongForm artists={artists} /> 
    </>
)};