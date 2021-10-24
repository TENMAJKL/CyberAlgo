import { algorithms } from "./algorithms.js"

export function isCorect(target, algorithm)
{
    var input = Math.random() % 100 + 1
    return JSON.stringify(target(input)) == JSON.stringify(algorithms[algorithm]["callback"](input))
}

