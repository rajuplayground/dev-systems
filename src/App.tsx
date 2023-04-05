import Frame from "$components/Frame";
import Counter from "./examples/counter";
import { add } from "./examples/operations";
import RandomList from "./examples/random-list";


function App(){
    const operation = add(1,2)

    return (<div>
        <Counter />
        <RandomList />
    </div>)
}

export default App;
