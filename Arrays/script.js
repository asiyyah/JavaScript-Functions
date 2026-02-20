//1. Sum of all items in the array
const itemPrice = [10, 20, 30, 40, 50];
function calculateTotalPrice(prices) {
    let total = 0;
    for (let i = 0; i < prices.length; i++) {
        total += prices[i];
    }
    return total;
}
console.log(calculateTotalPrice(itemPrice));

//2. Average score calculator
const studentScores = [85, 90, 78, 92, 88];
function calculateAverage(scores) {
    let total = 0;
    for (let i = 0; i < scores.length; i++) {
        total += scores[i];
    }
    return total / scores.length;
}
console.log(calculateAverage(studentScores));
// Using forEach to calculate the average score
function scoreAverage(scores){
    let total = 0;
    scores.forEach(score => {
        total += score;
    });
    return total / scores.length;
}
console.log(scoreAverage(studentScores));

//3. Finding the largest number in an array
const numbers = [10, 5, 8, 20, 15];
let largest = Math.max(...numbers);
console.log(largest);

// 4. Removing duplicates from an array
const numValues = [60, 70, 80, 60, 90, 70];
function removeDuplicates(arr) {
    let newSet = new Set(arr);
   let newArray = Array.from(newSet);
   return newArray;
}
console.log(removeDuplicates(numValues));

// 5. Sorting an array in ascending order
const unsortedArray = [5, 2, 9, 1, 5, 6];

// 5(b). Sorting an array in descending order
const unsortedArray2 = [5, 2, 9, 1, 5, 6];

// 6. Counting the occurrences of a specific element in an array
const elements = ["apple", "banana", "orange", "apple", "grape"];

// 7. Filter out even numbers from an array
const mixedNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 8. Merging two arrays into one
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const mergedArray = [...array1, ...array2];