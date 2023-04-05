import { screen, render, waitFor } from "$test/utilities"
import RandomList from ".";


describe("todos component", ()=>{
    it("should render todos", async()=>{
        render(<RandomList />)
        const todoItems = await screen.findAllByRole('listitem');
        expect(todoItems).toHaveLength(3);
        expect(todoItems[0]).toHaveTextContent('todo 1');
        expect(todoItems[1]).toHaveTextContent('todo 2');
        expect(todoItems[2]).toHaveTextContent('todo 3');
    })
})
