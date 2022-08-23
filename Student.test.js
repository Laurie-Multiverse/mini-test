const Student = require('./Student');

// describe(title, callback function)
describe("student class", () => {
    let student = new Student('Albert Einstein', '3 x 10^8');

    // - has name
    test ('has name', () => {
        expect(student.name).toBe('Albert Einstein');
    })

    // - has ID number
    test('has ID number', () => {
        expect(student.id).toBe('3 x 10^8');
    })

    // - can register for a class
    test("can register for a class", () => {
        student.register();
        expect(student.registered).toBe(true);
    })

    // - if student is already registered. an error "already registered" is raised
    test("cannot register twice", () => {
        expect( () => { student.register(); } ).toThrow("already registered");

        // let student2 = new Student("Amy", 21);
        // student2.register();
        // expect( () => { student2.register(); } ).toThrowError();
    })

    // - if the class is full, an error "class full" is raised
    test("class is full", () => {
        let student2 = new Student('Amy', 21);
        try {
            student2.register(true);           // throws error
            expect(true).toBe(false);       // should never execute this
        } catch(error) {
            expect(error.message).toBe("class full");
        }
    })

    // - can withdraw from a class
    test("withdrawal", () => {
        let student3 = new Student("Maggie", 5);
        student3.register();
        student3.withdraw();
        expect(student3.registered).toBe(false);
    })


})