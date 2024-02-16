import { Artist } from "@/lib/definitions"
export default function CreateSongForm({artists} : {artists: Artist[]}) {

    const artistList = artists.map((artist, index) => { 
        return <option key={index} value={artist.id}>{artist.name}</option>
    })
    return (
        <select name="artistId" id="artistId">
            {artistList}
        </select>
)}