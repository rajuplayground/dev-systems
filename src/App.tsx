import Frame from "$components/Frame";
import Counter from "./examples/counter";
import { add } from "./examples/operations";


function App(){
    const operation = add(1,2)

    return (<div>
        <Counter />
    </div>)
}

export default App;
