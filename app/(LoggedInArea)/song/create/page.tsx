import CreateSongForm from '@/components/createSong/CreateSongForm';
import {getArtists} from '@/lib/data';
import { auth } from "@/auth";
import { getUserByEmail } from '@/lib/data';

export default async function CreateSongPage() { 
  let artists = await getArtists();
  let session = await auth();
  let userEmail = session?.user?.email;
  let loggedUser = userEmail && await getUserByEmail(userEmail) 
  let userID = loggedUser?.id;

  return (
    <div className='pt-20'>
      <div className="container"> 
        <CreateSongForm artists={artists} userId={userID} /> 
      </div>
    </div>
)};