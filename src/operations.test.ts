import { expect, it } from "vitest"
import { add } from "./operations"

it("should work", ()=>{
    const result = add(1,2)
    expect(result).toBe(3)
})
