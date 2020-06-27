// COUNTING SHEEP
// Input = integer
// Output = A series of logs
// Input to each recursive call = function(input subtracted by 1)
// Output to each recursive call a statement
const countingSheep = (numSheep) => {
    if (numSheep !== 0){
        console.log(`${numSheep}: Another sheep jumps over the fence`)
    }
    else {
        return "All sheep jumped over the fence"
    }
    return countingSheep(numSheep - 1)
}
console.log(countingSheep(3))

// POWER CALCULATOR
// Input = two integers, base and exponent (exponent must be positive number)
// Output = integer = base times power of exponent
// Input to each recursive call = powerCalculator(integer, exponent - 1)
// Output to each recursive call = integer *
const powerCalculator = (base, exponent) => {
    if (exponent === 1) {
        return base
    }
    if (exponent <= 0) {
        return "exponent must be a positive number"
    }
    return base * powerCalculator(base, exponent - 1)
}
console.log(powerCalculator(10, 2))
console.log(powerCalculator(10, -1))

// REVERSE STRING
// Input = string
// Output = reversed string
// Input to each recursive call = reverseString(string.slice(-1))
// Output to each recursive call = string[-1] + 
const reverseString = (string) => {
    return (!string.length) ? string : string.slice(-1) + reverseString(string.slice(0, -1))
}
console.log(reverseString("planter"))

// nth TRIANGULAR NUMBER
// Input = integer
// Output, number of dots for nth triangle
// Input to each recursive call = nthTriangle(n-1)
// Output to each recursive call = n +
const nthTriangle = (n) => {
    return (n === 1)? n : n + nthTriangle(n-1)
}
console.log(nthTriangle(4))

// STRING SPLITTER
// Input = string, character
// Output = array
// Input to each recursive call = next series of characters starting from after separator
// Output to each recursive call = [first numbers before separator] concat with another array tbd
const stringSplit = (str, separator) => {
    if(str.indexOf(separator) === -1) {
        return str
    }
    return [str.slice(0, str.indexOf("/"))].concat(stringSplit(str.slice(str.indexOf("/")+1), separator))
}

console.log(stringSplit("02/20/2020", "/"))

// FIBONACCI 
// Input = number n
// Output = sequence
// Input to each rercusive call = fibonacci(n-1)
// Output to each recursive call = a sequence with the last two numbers added
// This one was harder!
const fibonacci = (n) => {
    if (n === 1) {
        return [0 ,1]
    }
    const sequence = fibonacci(n - 1)
    sequence.push(sequence[sequence.length - 1] + sequence[sequence.length - 2])
    return sequence
}

console.log(fibonacci(7))

// FACTORIAL 
// Input = number n
// Output = n!
// Input to each rercusive call = factorial(n - 1)
// Output to each recursive call = n * 
const factorial = (n) => {
    if (n === 1) {
        return n
    }
    return n * factorial(n - 1)
}
console.log(factorial(5))

// FACTORIAAL 
// Input = matrix
// Output = string
// Input to each rercusive call = matrix
// Output to each recursive call = String representing directions
const mazeEscape = (maze) => {
    const corridor = maze.shift()
    let wayOut = ""
    if (!maze.length) {
        return "e"
    }
    for (i = 0; i < corridor.length; i++) {
        if (corridor[i] === "e") {
            return "e"
        }
        if (i === corridor.lastIndexOf(" ")) {
            wayOut += "D"
            break
        }
        if (corridor[i]  === "*") {
            wayOut += "D"
            break
        }
        if (corridor[i] === " ") {
            wayOut += "R"
        }
    }
    console.log(wayOut)
    return wayOut + mazeEscape(maze)
}

let mySmallMaze = [
    [' ', ' ', ' '],
    [' ', '*', ' '],
    [' ', ' ', 'e']
];

//console.log(mySmallMaze[1])
console.log(mazeEscape(mySmallMaze)) // ??



// 9. ??

//ANAGRAMS??

// ORG CHART

//INT TO BIN
// Input Integer
// Output Binary Representation
// Recursive Case return number % 2 + 10 * intToBin(number / 2)
const intToBin = (int) => {
    if (int == 0) {
        return 0
    }
    else return (int % 2 + 10 * intToBin(int / 2))
}
console.log(intToBin(10))
