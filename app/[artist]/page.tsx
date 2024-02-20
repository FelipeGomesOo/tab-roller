import { Card, CardContent, CardHeader , CardTitle} from "@/components/ui/card";
import { getArtistByUrl, getSongsByArtist } from "@/lib/data";
import Link from "next/link";  
import { Metadata, ResolvingMetadata } from 'next';

type Props = {
  params: { artist: string } 
}

export async function generateMetadata( { params }: Props, parent: ResolvingMetadata ): Promise<Metadata> {  

  const artist = await getArtistByUrl(params.artist); 
 
  return {
    title: artist?.name, 
  }
}


export default async function ArtistPage({ params }: Props) { 

  let artist = await getArtistByUrl(params.artist);
  let songs = await getSongsByArtist(artist?.id);

  return (
    <main className="bg-gray-100 h-dvh pt-20 ">
      <div className="container mx-auto p-4 flex gap-4">
            <Card className="flex-1">
              <CardHeader>
                <CardTitle>{artist?.name}</CardTitle>
              </CardHeader>
              <CardContent> 
                <ul>
                  {songs.map((song) => (
                    <li key={song.id}>
                      <Link href={`/${artist?.url}/${song.url}`}>
                        {song.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
      </div>
    </main>
  )
}
