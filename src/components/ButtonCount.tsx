import { useState } from 'react';

type ButtonProps = {
    children?: string;
}


export function ButtonCount(props: ButtonProps) {
    const [counter, setCounter] = useState(0);

    function increment(){
      setCounter(counter +1);
    }

    return (
      <button onClick={increment}>{counter}</button>
    )
}