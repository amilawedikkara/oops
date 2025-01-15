/*let person={
    name:"john",
    age : 30, 
    city: "New York"

};
console.log(person.name);
console.log(person["name"]);
console.log(person["age"]);
console.log(person["city"]);

let company={
    name: "TechCorp",
    location: "San Francisco",
    EmployeesCount: 100,
    details: { CEO: "Jane Smith", CTO: "Mike Brown" } 
}
console.log(company["name"]);
console.log(company["location"]);
console.log(company.details["CEO"]);
console.log(company.details.CEO);
*/
let car={
    make: "Toyota",
    model: "Camry",
    year: 2019
};
// Step 2: Update the year property to 2021
car.year = 2021;
// Step 3: Add a new property 'color' with the value 'blue'
car.color = "blue";
// Step 4: Delete the model property from the object
delete car.model;
// add property "cc"
car.cc="1300cc"
//add property country of origine
car.coo="Japan"
// Step 5: Print the updated object
console.log(car);