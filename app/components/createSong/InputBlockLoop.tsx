'use client'; 
import { useState } from 'react'; 
import InputBlock from './InputBlock';

export default function InputBlockLoop({type}: {type: string}) {
    const defaultValue = {prop: '', duration: '4'};

    const [inputs, setInputs] = useState([defaultValue]);

    const handleClick = (e: React.MouseEvent) => {
        e.preventDefault()
        setInputs([...inputs, defaultValue])
    }
    
    const inputToString = inputs.map(item => `"${item.prop}","${item.duration}"`).join('; ');
    //const inputToString = "Testando!";
    console.log(inputToString, "asdasd")
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
        <button onClick={(e) => handleClick(e)}>Add item</button>
        <input 
            type="hidden" 
            name={`${type}Input`} 
            id={`${type}Input`} 
            value={inputToString} 
        />
    </>
)}