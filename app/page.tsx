import { Card, CardContent, CardHeader , CardTitle} from "@/components/ui/card";
import { getArtists } from "../lib/data";
import Link from "next/link";

export default async function Home() { 
  let artists = await getArtists();
  return (
    <main className="bg-gray-100 h-dvh pt-20 ">
      <div className="container mx-auto p-4 flex gap-4">
            
            <Card className="flex-1">
              <CardHeader>
                <CardTitle>Top Artists</CardTitle>
              </CardHeader>
              <CardContent>
                <ul>
                  {artists.map((artist) => (
                    <li key={artist.id}>
                      <Link href={`/${artist.url}`}>
                        {artist.name}
                      </Link>
                    </li>
                  ))}
                </ul>  
              </CardContent>
            </Card>
            <Card className="flex-1">
              <CardHeader>
                <CardTitle>Top Songs</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Card content</p>
              </CardContent>
            </Card>
      </div>
    </main>
  )
}
