// Age Category Checker
let age = 20
let userAge = 30
if(userAge >= age){
    console.log(`User is an Adult`)
}else {
    console.log(`User is underage`)
}

// Password Strength Checker
let strongPassword = `Pass_1234`
let userPassword =`pass123`

if(userPassword.length >= strongPassword.length){
    console.log(`Strong password`)
}else{
    console.log(`Enter a strong password`)
}

// Username Formatter
function formatUsername(name) {
    return name.trim().toLowerCase();
}
let formattedUsername = formatUsername("  Mary Ann  ");
console.log(formattedUsername);

// Temperature Converter
function celsiusToFahrenheit(celsius) {
    let fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
}
let tempCelsius = 25;
let tempFahrenheit = celsiusToFahrenheit(tempCelsius);
console.log(`${tempCelsius}°C is equal to ${tempFahrenheit}°F.`);


// Grade Calculator
function calculateGrade(score) {
    let grade;  
    if (score >= 70) {
        grade = "A";
    } else if (score >= 60) {
        grade = "B";
    } else if (score >= 50) {
        grade = "C";
    } else if (score >= 45) {
        grade = "D";
    } else {
        grade = "F";
    }
    return grade;
}
let studentScore = 85;
let studentGrade = calculateGrade(studentScore);
console.log(`The student's grade is: ${studentGrade}`);


// function calculateGrade(score) {
//     if (score >= 70) return "A";
//     if (score >= 60) return "B";
//     if (score >= 50) return "C";
//     if (score >= 45) return "D";
//     return "F";
// }



// Discount Calculator
function calculateDiscount(price, discountPercentage) {
    let discountAmount = (price * discountPercentage) / 100;
    let finalPrice = price - discountAmount;
    return finalPrice;
}
let discountedPrice = calculateDiscount(100, 20);
console.log(discountedPrice)

// Greeting Message Generator
function greeting(name, location) {
   let message = `Hello ${name}, welcome to ${location}!`;
   return message;
}
let userGreeting = greeting("Alice", "New York");
console.log(userGreeting);

// Login Validation Simulator
// function validateUserLogin(username, password) {
//     let validUsername = "Admin";
//     let validPassword = "password123";

//     if (username === validUsername && password.length >= validPassword.length) {
//         return "Login successful!";
//     } else {
//         return "Invalid username or password.";
//     }  }
// let loginValidation = validateUserLogin("admin", "password123");
// console.log(loginValidation);

function validateUserLogin(username, password) {
    let correctUser = "admin";
    let correctPass = "password123";

    if (username === correctUser) {
        
        if (password === correctPass) {
            return "Login successful!";
        } else {
            return "Password incorrect.";
        }

    } else {
        return "Username not found.";
    }
}

console.log(validateUserLogin("admin", "password123")); // Success!
console.log(validateUserLogin("admin", "wrong123"));    // Password incorrect.

// Vowel Counter
function countVowels(letters) {
    let count = 0;
    let vowels = "aeiouAEIOU";
    
    for (let char of letters) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}
let vowelCount = countVowels("Dev and Design");
console.log(vowelCount);

// Odd or Even Number Identifier
function identifyOddEven(number) {
    if (number % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}
let oddEvenResult = identifyOddEven(7);
console.log(oddEvenResult);

// Odd or Even Number Identifier (concatination)
function identifyOddEven(number) {
    let result; // Create an empty variable to hold the answer

    if (number % 2 === 0) {
        result = "Even"; // Set the variable to "Even"
    } else {
        result = "Odd";  // Set the variable to "Odd"
    }

    return result; // Send the final answer back
}

// Example usage:
let myNumber = 15;
let type = identifyOddEven(myNumber);

console.log(`The number ${myNumber} is ${type}.`);

// odd or even number identifier (ternary operator)
function identifyOddEven(number) {
    return (number % 2 === 0) ? "Even" : "Odd";
}
// Example usage:
let myValue = 60;
let result = identifyOddEven(myValue);
console.log(`The number ${myValue} is ${result}.`);






















// Temperature Converter

// Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
  return (celsius * 9/5) + 32;
}

// Fahrenheit to Celsius
function fahrenheitToCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5/9;
}


