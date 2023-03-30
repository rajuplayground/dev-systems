import Frame from "$components/Frame";
import { add } from "./examples/operations";


function App(){
    const operation = add(1,2)

    return (<div>
        <Frame>
        <h1>Hello worlds done for {operation}</h1>
        </Frame>
    </div>)
}

export default App;
