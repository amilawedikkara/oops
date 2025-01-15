/*Exercise 1: Accessing Object Properties

Objective:

Access and print the properties of a given JavaScript object.

Instructions:

· Create an object person with the properties: name: "John Doe"

· age: 30

· city: "New York"

Access and print each property of the object using dot notation.

Access and print each property of the object using bracket notation.*/ 

// Create the object
let person = {
    name: "John Doe",
    age: 30,
    city: "New York"
};

// Access and print each property using dot notation
console.log("Using dot notation:");
console.log("Name:", person.name);
console.log("Age:", person.age);
console.log("City:", person.city);

// Access and print each property using bracket notation
console.log("\nUsing bracket notation:");
console.log("Name:", person["name"]);
console.log("Age:", person["age"]);
console.log("City:", person["city"]);

/*Exercise 2: Nested Objects

Objective:

Access properties from a nested object.

Instructions:

· Create an object company with the properties: name: "TechCorp"

· location: "San Francisco"

· employees: count: 100

· details: { CEO: "Jane Smith", CTO: "Mike Brown" }

Access and print the name of the company.

Access and print the number of employees.

Access and print the name of the CTO. */

//Create an object company
let company={
    name: "TechCorp",
    location : "San Francisco",
    employees:{ 
        count: 100,
        details: { CEO: "Jane Smith", CTO: "Mike Brown" }
    }

}
// Access and print the name of the company
console.log("Company Name:", company.name);

// Access and print the number of employees
console.log("Number of Employees:", company.employees.count);

// Access and print the name of the CTO
console.log("CTO Name:", company.employees.details.CTO);


/*Exercise 3: Updating Object Properties

Objective:

Update the properties of an object.

Instructions:

· Create an object car with the properties: make: "Toyota"

· model: "Camry"

· year: 2019

Update the year property to 2021.

Add a new property color with the value "blue".

Delete the model property from the object.

Print the updated object to verify changes. */

// Create the car object
let car = {
    make: "Toyota",
    model: "Camry",
    year: 2019
};

// Update the year property to 2021
car.year = 2021;

// Add a new property 'color' with the value 'blue'
car.color = "blue";

// Delete the model property from the object
//delete car.model;

// Print the updated object to verify changes
console.log("Updated car object:", car);

/*Exercise 4: Looping Through Object Properties

Objective:

Use a loop to iterate over object properties.

Instructions:

· Create an object student with the properties: name: "Alice"

· grade: "A"

· subject: "Mathematics"

· year: "Sophomore"

Write a function that takes an object as an argument and uses a for...in loop to print each key and its corresponding value.

Call the function with the student object to test it. */
// Create the student object
let student = {
    name: "Alice",
    grade: "A",
    subject: "Mathematics",
    year: "Sophomore"
};

// Function to iterate over object properties and print key-value pairs
function printObjectProperties(obj) {
    for (let key in obj) {
        console.log(`${key}: ${obj[key]}`);
    }
}

// Call the function with the student object
printObjectProperties(student);
