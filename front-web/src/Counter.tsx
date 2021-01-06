import { useEffect, useState } from "react";
import App from "./App";

function Counter() {

    const [counter, setCounter] = useState(0);

    const handleIncrease = () => {
        console.log('Incrementou');
        setCounter(counter + 1);
    }

    const handleDecrease = () => {
        console.log('Decrementou');
        setCounter(counter - 1);
    }

    
    useEffect(() => {
        console.log('Comp Iniciou')
    }, []);

    return (
        <div>
            <button onClick = {handleIncrease}>Incrementar</button>
            <button onClick = {handleDecrease}>Decrementar</button>
            <h3>Valor do contador: {counter} </h3>
        </div>
    );
}

export default Counter;