import { getArtistAndSong } from "@/lib/data"; 
import { Metadata, ResolvingMetadata } from 'next'; 
import SongWindow from "@/components/songPage/SongWindow";
import useSongData from "@/lib/hooks/useSongData";

type Props = {
  params: { artist: string, song: string } 
}

export async function generateMetadata( { params }: Props, parent: ResolvingMetadata ): Promise<Metadata> {  

  let artist = await getArtistAndSong(params.artist, params.song); 
 
  return {
    title: artist?.songs[0].name + ' - ' + artist?.name     
  }
}

export default async function SongPage({ params }: Props) { 

    let artist = await getArtistAndSong(params.artist, params.song); 
    let song = artist?.songs[0];
    let {songData} = useSongData({song: song});

  return (
    <>
      <SongWindow songData={songData} />
    </>
  )
}
