import { expect, it, describe } from "vitest"
import { add, subtract } from "./operations"

describe("Mathematical operations", ()=>{
    it("should work return added numbers", ()=>{
        const result = add(1,2)
        expect(result).toBe(3)
    })

    it("should work return subtracted numbers", ()=>{
        const result = subtract(4,2)
        expect(result).toBe(2)
    })
})
