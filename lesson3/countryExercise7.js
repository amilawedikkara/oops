let countries = [
    {
        name: 'Belgium',
        population: 11589623,
        largestCity: 
            {
                name: 'Brussels',
                population: 174383
            }
    },
    {
        name: 'France',
        population: 65273511,
        largestCity: 
            {
                name: 'Paris',
                population: 2190327
            }
    },
    {
        name: 'Finland',
        population: 5540720,
        largestCity: 
            {
                name: 'Helsinki',
                population: 648042
            }
    },
    {
        name: 'Sweden',
        population: 10367232,
        largestCity: 
            {
                name: 'Stockholm',
                population: 1515017
            }
    },
    {
        name: 'Norway',
        population: 5367580,
        largestCity: 
            {
                name: 'Oslo',
                population: 1111634293
            }
    }
];
/*
// Create a function which prints the names of the countries and their biggest cities given in an array
function printCountryNameAndLargestCity(countries) {
    for(let i = 0; i < countries.length; i++){
       console.log(countries[i].name + " - " + countries[i].largestCity.name); 
    }
}
printCountryNameAndLargestCity(countries);

/* uses the forEach method, which is a higher-order function that simplifies
 iteration by automatically providing each element (country) in the array.*/
 /*
function printCountryNames(countries) {
    countries.forEach(country => {
        console.log(country.name);
    });
}
printCountryNames(countries);

// create function to sort countries based on population

function sortPopulation(x){
    const sortedArray=countries.sort((a, b) => b.population - a.population);
    return sortedArray.name;
    return sortedArray.population;
}

console.log(sortPopulation(countries));

//Write a function to print the names of the largest cities in each country.
function largestcityForEach (x){
    countries.forEach(country=>{
        console.log("foreach " + country.largestCity.name)
    }

    )
}
largestcityForEach(countries); 
*/
/*
class Country {
    constructor(name, population, largestCity) {
        this.name = name;
        this.population = population;
        this.largestCity = largestCity;
    }

    // Method to display country details
    displayDetails() {
        console.log(`Country: ${this.name}`);
        console.log(`Population: ${this.population}`);
        console.log(`Largest City: ${this.largestCity.name} (Population: ${this.largestCity.population})`);
    }
}

// Creating objects from the Country class using the countries array
let countryObjects = countries.map(country => 
    new Country(country.name, country.population, country.largestCity)
);

// Display details of each country
countryObjects.forEach(country => country.displayDetails());
*/
for(i=0;i<countries.length;i++){
    console.log(`country: ${countries[i].name}  largestCity: ${countries[i].largestCity.name}`);
}

for (i=0;i<countries.length;i++){
    if (countries[i].largestCity.population>1000000){
        console.log(`Mege City ${countries[i].largestCity.name} and population ${countries[i].largestCity.population}`)
    }
}
