export default function getListStudents() {
    arrayStudents = [];

    class Student {
        constructor(id, firstName, location) {
            this._id = id;
            this._firstName = firstName;
            this._location = location;
        }
    

        // getters
        get id() {
            return this._id;
        }

        get firstName() {
            return this._firstName
        }

        get location() {
            return this._location;
        }

        // setters
        set id(id) {
            if (typeof id !== 'number') {
                throw new TypeError('Id must be a number');
            }
            this._id = id;
        }

        set firstName(firstName) {
            if (typeof firstName !== 'string') {
                throw new TypeError('Firstname must be a string');
            }
            this._firstName = firstName;
        }

        set location(location) {
            if (typeof location !== 'string') {
                throw new TypeError('Location must be a string');
              }
              this._location = location;
        }

        const student1 = new Student(1, "Guillaume", "San Francisco");
        arrayStudents.push(student1);
        const student2 = new Student(2, "James", "Columbia");
        arrayStudents.push(student2);
        const student3 = new Student(5, "Serena", "San Francisco")
        arrayStudents.push(student3);

        return arrayStudents;
        
        
}
