import { even } from "./algorithms/even.js"
import { sum } from "./algorithms/sum.js"
import { factorial } from "./algorithms/factorial.js"
import { prime } from "./algorithms/prime.js"

export const algorithms = [
    {
        name: "allEven",
        code: "/*\nReturns array of all even numbers from 1 to number in variable number\n*/", 
        callback: even, 
        fontSize: 12, 
        output: false
    },
    {
        name: "sum", 
        code: "/*\nReturns sum of all numbers from 1 to number in variable number\n*/", 
        callback: sum, 
        fontSize: 12, 
        output: false
    },
    {
        name: "factorial", 
        code: "/*\nReturns factorial of number in variable number\n*/", 
        callback: factorial, 
        fontSize: 12, 
        output: false
    },
    {
        name: "prime", 
        code: "/*\nReturns whenever is number in variable number prime\n*/", 
        callback: prime, 
        fontSize: 12, 
        output: false
    }
]
