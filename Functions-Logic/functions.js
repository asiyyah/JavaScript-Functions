// Reusable Calculator
function calculate(num1, num2, operator) {
    let result;
    if (operator === "+") {
        result = num1 + num2;
    } else if (operator === "-") {
        result = num1 - num2;
    } else if (operator === "*") {
        result = num1 * num2;
    } else if (operator === "/") {
        result = num1 / num2;
    } else {
        result = "Unknown Operator";
    }
    return result;
}
let operation = calculate(10, 5, "*")
console.log(operation)

// Max & Min of 5 Numbers
function findMinMax(n1, n2, n3, n4, n5) {
    let max = Math.max(n1, n2, n3, n4, n5);
    let min = Math.min(n1, n2, n3, n4, n5);
    return `Highest: ${max}, Lowest: ${min}`;
}
let mathResult = findMinMax(10, 2, 88, 4, 30)
console.log(mathResult)

// Factorial Calculator
function calculateFactorial(num) {
    let result = 1;
    for (let i = num; i > 0; i--) {
        result = result * i;
    }
    return result;
}
let calcResult = calculateFactorial(5)
console.log(calcResult)

// Reverse String
function reverseString(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed = reversed + str[i];
    }
    return reversed;
}
let reversedString = reverseString("Hello World")
console.log(reversedString)

// Interest Calculator
function calculateInterest(principal, rate, time) {
    let interest = (principal * rate * time) / 100;
    return interest;
}
let interestResult = calculateInterest(1000, 5, 2)
console.log(interestResult)

// BMI Calculator
function calculateBMI(weight, height) {
    // 1. Validation: Check if the inputs are valid numbers
    if (weight <= 0 || height <= 0) {
        return "Please enter valid positive numbers for weight and height.";
    }

    // 2. The Calculation
    let bmi = weight / (height * height);
    
    // 3. Rounding for display
    let roundedBMI = bmi.toFixed(1);

    // 4. Categorizing the result
    let category;
    if (bmi < 18.5) {
        category = "Underweight";
    } else if (bmi < 25) {
        category = "Normal weight";
    } else if (bmi < 30) {
        category = "Overweight";
    } else {
        category = "Obese";
    }

    // 5. Returning the final message
    return `BMI: ${roundedBMI} | Category: ${category}`;
}

// Testing the function
console.log(calculateBMI(75, 1.8));   // Output: BMI: 23.1 | Category: Normal weight
console.log(calculateBMI(-10, 1.8));  // Output: Please enter valid positive numbers...

// Leap Year Checker
// A year is a leap year if it’s divisible by 4, but not by 100 (unless it's also divisible by 400).
function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return `${year} is a Leap Year`;
    } else {
        return `${year} is NOT a Leap Year`;
    }
}
let leapYearResult = isLeapYear(2020)
console.log(leapYearResult)

// Voting eligibility Checker
function canVote(age) {
    let status;
    if (age >= 18) {
        status = "Eligible to vote";
    } else {
        status = "Too young to vote";
    }
    return status;
}
let votingEligibility = canVote(16)
console.log(votingEligibility)