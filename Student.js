/*
Specification for our Student:

- has name
- has ID number
- can register for a class
    - if the class is full, an error "class full" is raised
    - if student is already registered. an error "already registered" is raised
- can withdraw from a class
*/

class Student {
    constructor(name, id) {
        this.name = name;
        this.id = id;
        this.registered = false;
    }

    register(isClassFull) {
        //console.log(" trying to register student", this);
        if (isClassFull) {
            let classFullError = new Error("class full");
            throw classFullError;
        } else if (this.registered) {  // identical to this.registered
            throw new Error("already registered");
        } else {
            this.registered = true;
        }
    }

    withdraw() {
        this.registered = false;
    }
}


module.exports = Student;