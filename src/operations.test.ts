import { expect, it, describe } from "vitest"
import { add, division, multiplication, subtract } from "./operations"

describe("Mathematical operations", ()=>{
    it("should work return added numbers", ()=>{
        const result = add(1,2)
        expect(result).toBe(3)
    })

    it("should work return subtracted numbers", ()=>{
        const result = subtract(4,2)
        expect(result).toBe(2)
    })

    it("should work return multiplied numbers", ()=>{
        const result = multiplication(4,2)
        expect(result).toBe(8)
    })

    it("should work return 0 if denominator is 0 for division", ()=>{
        const result = division(4,0)
        expect(result).toBe(0)
    })

    it("should work return division", ()=>{
        const result = division(4,2)
        expect(result).toBe(2)
    })
})
