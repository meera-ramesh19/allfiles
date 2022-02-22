// You will be given an array of numbers in which two numbers occur once and the rest occur only twice. Your task will be to return the sum of the numbers that occur only once.

// For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, and their sum is 15. Every other number occurs twice.

// solution -> Time Complexity O(n^2)
function repeats(arr){
    return arr.filter(n => arr.indexOf(n) === arr.lastIndexOf(n)).reduce((a,c) => a+c, 0)
}

// solution -> Time Complexity O(n^2)
function repeats(arr){
    return arr.reduce((a,c) => a + (arr.indexOf(c) === arr.lastIndexOf(c) ? c : 0), 0)
}

// Using an object (JavaScript objects are implemented using Hash tables under the hood) -> Time Complexity O(n)
function repeats(arr){
    let obj = {}
    let sum = 0
    for(let i = 0; i<arr.length; i++){
        // Check if the number exits in obj, if it doesn't add it to obj and add it to sum, if it does just subtract it from the sum
        if(!(obj[arr[i]])){
            obj[arr[i]] = "in"
            sum+=arr[i]
        }else{
            sum-=arr[i]
        }
    }
    return sum
}

console.log(repeats([4,5,7,5,4,8]),15)
console.log(repeats([9, 10, 19, 13, 19, 13]),19)
console.log(repeats([16, 0, 11, 4, 8, 16, 0, 11]),12)
console.log(repeats([5, 17, 18, 11, 13, 18, 11, 13]),22)
console.log(repeats([5, 10, 19, 13, 10, 13]),24)
