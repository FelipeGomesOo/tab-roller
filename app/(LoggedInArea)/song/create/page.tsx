import CreateSongForm from '@/components/createSong/CreateSongForm';
import {getArtists} from '@/lib/data';

export default async function CreateSongPage() { 
  let artists = await getArtists();
  
  return (
    <>
     <CreateSongForm artists={artists} /> 
    </>
)};