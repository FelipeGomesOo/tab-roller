import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, } from "@/components/ui/select"
  
export default function SelectKeys() {

    const keyList = [["C", "Am"], ["G", "Em"], ["D", "Bm"], ["A", "F#m"], ["E", "C#m"], ["B", "G#m"], ["F#", "D#m"], ["C#", "A#m"], ["F", "Dm"], ["Bb", "Gm"], ["Eb", "Cm"], ["Ab", "Fm"], ["Db", "Bbm"], ["Gb", "Ebm"], ["Cb", "Abm"]]

    const keys = keyList.map((keyPair, index) => { 
        const pair = keyPair.join(" / "); 
        return <SelectItem key={index} value={pair}>{pair}</SelectItem>
    })

    return (
        <Select name="songKey">
            <SelectTrigger className="w-full">
                <SelectValue placeholder="Keys" />
            </SelectTrigger>
            <SelectContent> 
                {keys}
            </SelectContent>
            
        </Select>
)}

