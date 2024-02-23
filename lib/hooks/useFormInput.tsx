import { useState } from 'react'; 

export function useFormInput({initialValue}: {initialValue: string | number}) {
  const [value, setValue] = useState(initialValue);

  function handleChange(e: any) {
    setValue(e.target.value);
  }

  const inputProps = {
    value: value,
    onChange: handleChange
  };

  return inputProps;
}


