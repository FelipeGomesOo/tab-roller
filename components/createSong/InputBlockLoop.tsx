'use client'; 
import { useState } from 'react'; 
import InputBlock from './InputBlock';
import { Button } from '@/components/ui/button';

export default function InputBlockLoop({type}: {type: string}) {
    const defaultValue = {prop: '', duration: '4'};

    const [inputs, setInputs] = useState([defaultValue]);

    const handleClick = (e: React.MouseEvent) => {
        e.preventDefault()
        setInputs([...inputs, defaultValue])
    }
    
    const inputToString = inputs.map(item => `"${item.prop}","${item.duration}"`).join('; ');
    console.log(inputToString)
  return (
    <>
        {
            inputs.map((a, index) => (
                <InputBlock 
                    key={index} 
                    index={index} 
                    type={type} 
                    items={inputs} 
                    setItems={setInputs} 
                    item={a} 
                />
            )) 
        } 
        <Button variant="secondary" onClick={(e) => handleClick(e)}>Add item</Button>
        <input 
            type="hidden" 
            name={`${type}Input`} 
            id={`${type}Input`} 
            value={inputToString} 
        />
    </>
)}