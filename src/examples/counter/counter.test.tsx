import { screen, render } from "$test/utilities";
import Counter from ".";

it("Should render counter component", ()=>{
    render(<Counter />)
    const currentCount = screen.getByTestId('current-count');
    expect(currentCount).toHaveTextContent('0')
})

it("Should increment when the 'Increment' button is pressed", async ()=>{
    // render the component
    const{user} = render(<Counter />)
    // get the current count
    const currentCount = screen.getByTestId('current-count');
    // calculate the expected count
    const expectedCount = parseInt(currentCount.textContent) + 1
    // click the increment button
    const incrementBtn = screen.getByRole('button', {name: 'Increment'})
    await user.click(incrementBtn)
    // check the current count to be equal to expected count
    expect(currentCount).toHaveTextContent(`${expectedCount}`)
})

it("Should render the component with an initial count", ()=>{
    const initialCount = 5;
    //render the component with initial count
    render(<Counter initialCount={initialCount} />)
    const currentCount = screen.getByTestId('current-count')
    // check the count to be equal to the initial count set
    expect(currentCount).toHaveTextContent(`${initialCount}`)
})

it("should reset the count to 0 when 'reset' button is pressed", async ()=>{
    const initialCount = 5;
    // render the component
    const{user} = render(<Counter initialCount={initialCount} />)

    const currentCount = screen.getByTestId('current-count')
    const resetBtn = screen.getByRole('button', {name: 'Reset'})
    await user.click(resetBtn)

    expect(currentCount).toHaveTextContent('0')
})
