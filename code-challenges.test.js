// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided. HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

// the test should have the color arrays shuffled 
// expect() should contain the given expected output 

describe("shuffle", () => {
    it("Takes in an array, removes the first item from the array, and shuffles the remaining content", () => {
    const colors1 = ["purple", "blue", "green", "yellow", "pink"]
    const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre","aquamarine", "saffron"]
// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
        expect(shuffle(colors1)).toEqual(expect.arrayContaining(["yellow", "blue", "pink", "green"]))
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]
        expect(shuffle(colors2)).toEqual(expect.arrayContaining(["saffron", "aquamarine","periwinkle", "indigo", "ochre"]))
    })
})

// I got RED 
// ● shuffle › Takes in an array, removes the first item from the array, and shuffles the remaining content
// ReferenceError: shuffle is not defined

// b) Create the function that makes the test pass.
// make a function called shuffle with 'array' as a parameter 
// either .splice() or .slice() to remove a color??
// use .sort() in conjunction with something to make it random 
    // use math.random to randomize the array
const shuffle = (array) => {
    return array.slice(1).sort(() => Math.random() - 1)
}

// I got green 
// ✓ Takes in an array, removes the first item from the array, and shuffles the remaining content (3 ms)

// --------------------2) Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.

// a) Create a test with expect statements for each of the variables provided.

// the test should have the array of numbers in order from min to max 
// expect() should contain the given expected output 

describe("min_max", () => {
    it("takes an array of numbers, returns an array of the minimum and maximum numbers, in that order", () => {
    const nums1 = [3, 56, 90, -8, 0, 23, 6]
    const nums2 = [109, 5, 9, 67, 8, 24]

// Expected output: [-8, 90]
    expect(min_max(nums1)).toEqual([-8, 90])
// Expected output: [5, 109]
    expect(min_max(nums2)).toEqual([5, 109])
         })
})

// I got RED 
// ● min_max › takes an array of numbers, returns an array of the minimum and maximum numbers, in that order
// ReferenceError: min_max is not defined

// b) Create the function that makes the test pass.

// use math.min and math.max to find the corresponding numbers of the array \
// create a new array to hold the newly sorted numbers 
// use .sort() to return the numbers in min to max order 
// use a and b to simplify the code 

const min_max = (array) => {
    let newArray = [Math.min(...array), Math.max(...array)]
    return newArray.sort((a, b) => a - b)
}

// I got RED 
//  ● min_max › takes an array of numbers, returns an array of the minimum and maximum numbers, in that order
// ReferenceError: min_max is not defined

// I got green but didn't change anything from when I got red?? 



// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. 
// STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.
describe("doubles", () => {
    it("takes in two arrays as arguments and returns one array with no duplicate values", () => {
    const testArray1 = [3, 7, 10, 5, 4, 3, 3]
    const testArray2 = [7, 8, 2, 3, 1, 5, 4]
        expect(doubles(testArray1, testArray2)).toEqual([3, 7, 10, 5, 4, 8, 2, 1])
// Expected output: [3, 7, 10, 5, 4, 8, 2, 1]

    })
})

// I got RED 
// ● doubles › takes in two arrays as arguments and returns one array with no duplicate values
// ReferenceError: doubles is not defined


// b) Create the function that makes the test pass.

// combine the two variables and use the .filter() to find the value of each number 
    // .filter() should return a smaller array than the input 
    // make a new array named no doubles to differentiate between doubles 
// dont forget to call on the new array name  

const doubles = (array1, array2) => {
    let combinedArray = [...array1, ...array2]
    let noDoubles = combinedArray.filter((value, index) => index === combinedArray.indexOf(value))
    return noDoubles
}

// I got red 
//  ● doubles › takes in two arrays as arguments and returns one array with no duplicate values
// ReferenceError: doubles is not defined

// I got green but didn't change anything from when I got red?? 