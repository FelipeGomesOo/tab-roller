'use client';  

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
    <div className="InputBlock">
      <input 
        className={type}
        type="text" 
        name={`${type}${index}`} 
        id={`${type}${index}`}
        value={item.prop ?? ''}
        onChange={e => handleChange(index, 'prop', e.target.value)}
      />
      <input 
        className='duration' 
        type="text" 
        name={`duration${index}`} 
        id={`duration${index}`} 
        value={item.duration}
        onChange={e => handleChange(index, 'duration', e.target.value)}
      />
    </div>
)}
