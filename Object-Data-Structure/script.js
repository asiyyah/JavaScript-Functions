//1. Student Information
const student = {
    name: `Layan`,
    age: 17,
    grade: {
        math: 85,
        science: 90,
        literature: 78,
    },
};
// 2.Checking if a key exists in the object
// A.Using dot notation
let studentAge = student.age;
console.log(`Student's age: ${studentAge}`);

// B. Using the `in` operator
if (`name` in student) {
    console.log(`Student's name: ${student.name}`);
} else {
    console.log(`Name not found in student object.`);
}

//3. Contact List
const contacts = {
    Aayan: {
        phone: 91234567890,
        address: `123 Main St, Cityville`,
    },
    
    Aarav: {
        phone: 9876543210,
        address: `456 Elm St, Townsville`,
    },

    Aadhya: {
        phone: 9988776655,
        address: `789 Oak St, Villageville`,
    },
    Saad: {
        phone: 9876543210,
        address: `456 Elm St, Townsville`,
    },
};

//4. Object & Methods
const foodOrder = {
    veggies: [
        { name: "Carrot", numberofItem: 3 },
        { name: "Broccoli", numberofItem: 2 },
        { name: "Spinach", numberofItem: 1 },
    ],

calculateTotalPrice: function () {
    let unitPrice = 200;
    let totalPrice = 0;
    for (let i = 0; i < this.veggies.length; i++) {
        totalPrice += this.veggies[i].numberofItem * unitPrice;
    }
    return totalPrice;
}}
let totalCost = foodOrder.calculateTotalPrice();
console.log(`Total price of the food order: ${totalCost}`);


//5. Shopping Cart
const shoppingCart = {
    Gadgets: [
        { name: "Laptop", price: 1200 },
        { name: "Mouse", price: 25 },
        { name: "Keyboard", price: 75 },
    ],

    Wears: [
        { name: "T-shirt", price: 20 },
        { name: "Jeans", price: 50 },
        { name: "Jacket", price: 100 },
    ],
};
// Adding new items to the shopping cart
shoppingCart.Gadgets.push({ name: "Smartphone", price: 800 });
shoppingCart.Wears.push({ name: "Sneakers", price: 60 });

// Removing an item from the shopping cart
shoppingCart.Gadgets.splice(1, 1); // Removes the Mouse from Gadgets


//6. Converting the shopping cart object to a JSON string
const jsonString = JSON.stringify(shoppingCart);
console.log(jsonString)

const newCart = JSON.parse(jsonString);
console.log(newCart)

// 7. Counting keys in an object
const numberOfCategories = Object.keys(shoppingCart).length;
console.log(numberOfCategories);