import React, { useEffect, useState } from 'react'

export default function Contact(){
    const[count, setCount] = useState(0);
    const[calculation, setCalculation] = useState(0);

    useEffect(() => {
        console.log("useEffect")
        setCalculation(() => count * 2);
        // setCount(count * 2)
        return ()=>{console.log("component un mount")}
    }, [count]); // <- add the count variable here

return (
    <>
        <p>Count: {count}</p>
        <button onClick={() => setCount((c) => c + 1)}>+</button>
        <p>Calculation: {calculation}</p>
    </>
);
}
