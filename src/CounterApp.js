import './App.css';
import { useState, useEffect } from "react";
import Timer from  './components/Timer';


const Counter = () => {
    // define the state for counter with an initial value 0
    let [count, setCount] = useState(0);
    const [isAutoIncrement, setIsAutoIncrement] = useState(false);
    const [incrementBy, setIncrementBy] = useState(1);
    


    // function to increment
    const increment = () => {
        setCount(count + incrementBy);
    }

    // function to decrement
    const decrement = () => {
      if(count === 0) return;
      setCount(count - incrementBy);
    }

    // function to reset
    const resetCounter = () => {
      setCount(0);
    }

    // Set up an interval to increment the counter when auto-incrementing is true
    useEffect(()=>{
      let intervalId;
      if(isAutoIncrement){
        intervalId = setInterval(()=>{
          setCount((count) => count + incrementBy);
        }, 1000);
      }

       // Cleanup function to clear the interval when auto-incrementing is stopped
      return ()=>{
        clearInterval(intervalId);
      }
    }, [isAutoIncrement]); // The effect runs when isAutoIncrementing changes

    
  
    // handle the  auto-increment functionality
    const handleAutoIncrement = ()=>{
      setIsAutoIncrement(!isAutoIncrement);
    }
  
    // Handle increment by changes
    const handleIncrementBy = (event) =>{
      setIncrementBy(Number(event.target.value));
    }

    return (
      <section className='row'>
          <div className='col' id='count'><p>{count}</p></div>
          <div className='col'>
            <p><input type='text' id='dataInput' onChange={handleIncrementBy}  autoComplete='off'  placeholder='Increment by ....'/></p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
              <button onClick={handleAutoIncrement}>
                {isAutoIncrement ? 'Stop Auto-Increment' : 'Start Auto-Increment'}
              </button>
              <button onClick={resetCounter}>Reset Counter</button>
          </div>
      </section>
    )

}

function CounterApp() {
  return (
    <div id="counter-container">
      <Timer />
      <div className="counter-title">
        <h1>Counter App</h1>
      </div>
      <div className='container'>
        <Counter />
      </div>
    </div>
  );
}


export default CounterApp;