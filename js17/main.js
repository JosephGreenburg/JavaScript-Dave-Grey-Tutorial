/**
 * Objects - Key Value Pairs in curly braces.
 * 
 */


//Syntax
const myObject = {name: "Joe"}; //Simple object
console.log(myObject); //Display entire object
console.log(myObject.name); //Display the value of key `name` using dot notation.


//An object can hold all data types, including booleans, integers, arrays, nested objects, functions.
const anotherObject = {
    alive: true,
    answer: 42,
    hobbies: ["video games", "Jog", "Films"],
    beverage: {
        morning: "Coffee",
        afternoon: "Sweet Tea",
        night: "Kombucha"
    },
    action: function() {
        return `Time for ${this.beverage.morning}`;
    }
}
/**
 * Accessing specific values of the object. Within the bracket the key will be surrounded by quotes.
 */
console.log(anotherObject.alive); //Dot notation
console.log(anotherObject["alive"]); //Bracket notation

console.log(anotherObject.hobbies[1]); //Dot notation and the index
console.log(anotherObject["hobbies"][1]) //Bracket notation and the index

console.log(anotherObject.beverage.morning); //Dot notation
console.log(anotherObject["beverage"]["morning"]); //Bracket notation

console.log(anotherObject.action()); //Call the method `action` within the object


/**
 * Creating a vehicle object that other create Objects will use with inheiritance
 */
const vehicle = {
    wheels: 4,
    engine: function() {
        return "vroom";
    }
}

/**
 * Create a truck object using the vehicle object
 */
const truck = Object.create(vehicle);
truck.doors = 2;
console.log(truck);
console.log(truck.wheels); //Inheritance - the properties and methods of vehicle
console.log(truck.engine());

/**
 * Car object using vehicle
 */
const car = Object.create(vehicle);
car.doors = 4;
car.engine = function() { return "whooosh"};
console.log(car.engine());
console.log(car.wheels);

/**
 * Telsa object using car
 */
const tesla = Object.create(car);
console.log(tesla.wheels);
tesla.engine = function() {return "shhhhsshh"};
console.log(tesla.engine());


/**
 * Band Object example
 */
const band = {
    vocals: "Robert Plant",
    guitar: "Jimmy Page",
    bass: "John Paul Jones",
    drums: "John Bonham"
}

/**
 * Delete
 */
delete band.drums; //Delets band key `drums` from the object. 
console.log(band.hasOwnProperty("drums")); //Will output a boolean - In this case it will be false. 

/**
 * List all keys and list all values using `.keys` and `.values`
 */
console.log(Object.keys(band)); //Listing all the keys within an object
console.log(Object.values(band)); //Listing all the values within an object

/**
 * Access key and values using a for-in loop
 */

for(let job in band) {
    console.log(`On ${job}, it's ${band[job]}`);
}

/**
 * Destructuring Objects - Can use more than one value at a time. Creates new variables from the whole object.
 */

//Example 1
const { guitar: myVariable, bass: myBass } = band;
console.log(myVariable);
console.log(myBass);

//Example 2
const { vocals, guitar, bass, drums } = band;
console.log(vocals);
console.log(guitar);

//Example 3 - using the value by destructuring an object.
function sings({ vocals }) {
    return `${vocals} sings!`;
}

console.log(sings(band));