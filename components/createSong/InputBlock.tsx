'use client';  
import { Input } from "@/components/ui/input";

type Item = {
  [key: string]: string | null;
  duration: string;
}

export default function InputBlock(
  {index, type, item,items,  setItems}: 
  {index: number, type: string, item: Item, items: Item[], setItems: any}) 
{

  const handleChange = (i: number, prop: string, value: string | null) => {
    const newItems = [...items];
    newItems[i][prop] = value;
    setItems(newItems);
    console.log(items)
  };

  return (
    <div className="InputBlock flex gap-2 mb-2">
      <Input 
        className={`w-80 ${type}`}
        type="text" 
        name={`${type}${index}`} 
        id={`${type}${index}`}
        value={item.prop ?? ''}
        onChange={e => handleChange(index, 'prop', e.target.value)}
      />
      <Input 
        className='duration w-20'  
        type="text" 
        name={`duration${type}${index}`} 
        id={`duration${type}${index}`} 
        value={item.duration}
        onChange={e => handleChange(index, 'duration', e.target.value)}
      />
    </div>
)}
