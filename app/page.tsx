import { Card, CardContent, CardHeader , CardTitle} from "@/components/ui/card";
import { getArtists } from "../lib/data";

export default function Home() { 
  return (
    <main className="bg-gray-100 h-dvh pt-20 ">
      <div className="container mx-auto p-4 columns-1 sm:columns-2 space-y-4 ">
            
            <Card>
              <CardHeader>
                <CardTitle>Top Artists</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Card content</p>
                <a href="songName">Go to song</a>
              </CardContent>
            </Card>
            <Card>
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
