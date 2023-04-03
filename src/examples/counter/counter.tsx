import Frame from "$components/Frame"
import { useState } from "react"

type CounterProps = {
    initialCount?:number;
}

const Counter = ({initialCount = 0}:CounterProps) => {
    const [count, setCount] = useState(initialCount)
    return <Frame>
        <header>
            <h1>Days since our last day</h1>
        </header>
        <div data-testid="current-count">
            {count}
        </div>
        <div>
            <button name="reset" onClick={()=>{setCount(0)}}>Reset</button>
            <button name="increment" onClick={()=>{setCount(prev => prev + 1)}}>Increment</button>
        </div>
    </Frame>
}

export default Counter
