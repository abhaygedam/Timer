import { useEffect, useState } from "react";


function Timer({ intialTime, finalTime }) {
    const [timer, setTimer] = useState(intialTime);
    
    useEffect(() => {
       const id = setInterval(() => {
            setTimer((preValue) => {
                if (preValue == finalTime) {
                    clearInterval(id);
                }
               return preValue - 1;
            })
       }, 1000)
        
    },[])

    return (
        <div>
            <h1>Timer :- { timer}</h1>
        </div>
    );
}

export default Timer;