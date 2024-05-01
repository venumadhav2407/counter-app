import { useState, useEffect } from "react";


// Timer component
export default function Timer(){
    const [time, setTime] = useState(new Date().toLocaleTimeString());

    useEffect(()=>{
        setInterval(()=>{
            setTime(new Date().toLocaleTimeString())
        }, 1000);
    }, []);
    
   
    return (
        <div>
            <p className="h2" style={{'color' : '#141E46','float' : 'left'}}>{time}</p>
        </div>

    )
}