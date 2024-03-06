/**
 * Classes
 */

/**
 * Example 1
 */

// class Pizza {
//     constructor(pizzaType, pizzaSize) {
//         this.type = pizzaType;
//         this.size = pizzaSize;
//         // this.crust = pizzaCrust;//Commenting out to try get and set below.
//         this.toppings = [];
//     }
//     //Getter and Setter
//     getCrust() {
//         return this.crust;
//     }
//     setCrust(pizzaCrust) {
//         this.crust = pizzaCrust;
//     }
//     getToppings() {
//         return this.toppings;
//     }
//     setToppings(topping) {
//         this.toppings.push(topping);
//     }
//     bake() {
//         console.log(`Baking a ${this.size} ${this.crust} crust ${this.type} pizza with ${this.getToppings()}.`);
//     }
// }

// const myPizza = new Pizza("Pepperoni", "Small");
// myPizza.setCrust("thin");
// myPizza.type = "Supreme";//You can access properties like this, but it isn't suggested. 
// myPizza.bake();
// myPizza.setToppings("sausage");
// myPizza.setToppings("mushrooms");
// console.log(myPizza.getToppings());

/**
 * Example 2 - Parent and child class
 */

// class Pizza {
//     constructor(pizzaSize) {
//         this.size = pizzaSize;
//         this.crust = "original";
//     }
//     //Getter and Setter
//     getCrust() {
//         return this.crust;
//     }
//     setCrust(pizzaCrust) {
//         this.crust = pizzaCrust;
//     }
// }

// class SpecialtyPizza extends Pizza {
//     constructor(pizzaSize) {
//         super(pizzaSize);
//         this.type = "The Works";
//     }
//     slice() {
//         console.log(`Our ${this.type} ${this.size} pizza has 8 slices.`);
//     }
// }

// const mySpecialty = new SpecialtyPizza("medium");
// mySpecialty.slice();

/**
 * Example 3 - Using Factory Functions vs Classes, and private accessing & setting properties 
 */

/**
 * Factory Function - Still supported, but not used as often.
 */

// function pizzaFactory(pizzaSize) {
//     const crust = "original";
//     const size = pizzaSize;
//     return {
//         bake: () => console.log(`Baking a ${size} ${crust} crust pizza.`)
//     }
// }
// const myPizza = pizzaFactory("small");
// myPizza.bake();

/**
 * Private setting and getting using an underscore
 */

// class Pizza {
//     constructor(pizzaSize) {
//         this.size = pizzaSize;
//         this.crust = "original";
//     }
//     //Getter and Setter
//     getCrust() {
//         return this._crust;//Adding underscore to show that these properties are private
//     }
//     setCrust(pizzaCrust) {
//         this._crust = pizzaCrust;//Adding underscore to show that these properties are private
//     }
// }

/**
 * Example - Private fields 
 */

class Pizza {
    crust = "original"; //Public - Can be used inside an outside the class
    #sauce = "traditional"; //Private fields noted with `#`. Can only be used inside the class.
    #size; //Private fields noted with `#`. Can only be used inside the class.
    constructor(pizzaSize) {
        this.#size = pizzaSize;
    }
    getCrust() {
        return this.crust;
    }
    setCrust(pizzaCrust) {
        this.crust = pizzaCrust;
    }
    hereYouGo() {
        console.log(`Here's your ${this.crust} crust ${this.#sauce} sauce pizza.`)
    }
}

const myPizza = new Pizza("large");
myPizza.hereYouGo();
console.log(myPizza.crust);//Public - returns "original".
console.log(myPizza.sauce);//Private - returns undefined;
