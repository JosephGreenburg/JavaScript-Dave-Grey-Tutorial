/**
 * Second example importing modules - Classes
 */

export default class User {
    constructor(email, name) {
        this._id = email; //Setting property to private using underscore
        this._name = name; //Setting property to private using underscore
    }
    greeting() {
        return `Hi, my name is ${this._name}`;
    }
};


