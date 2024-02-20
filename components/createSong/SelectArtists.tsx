import { Artist } from "@/lib/definitions"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  
export default function SelectArtist({artists} : {artists: Artist[]}) {

    const artistList = artists.map((artist, index) => { 
        return <SelectItem key={index} value={artist.id.toString()}>{artist.name}</SelectItem>
    })
    return (
        <Select name="artistId"  >
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Artists" />
            </SelectTrigger>
            <SelectContent> 
                {artistList}
            </SelectContent>
            
        </Select>
)}