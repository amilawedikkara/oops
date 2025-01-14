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