var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
// OK
var user = new Student('Jane', 'M.', 'User');
// OK, StudentはPersonを継承しているのでOK
// let user: Person = new Student('Jane', 'M.', 'User');
console.log(greeter(user), 
// userがPerson型の場合はNG, Studentを代入したとしても, Person型にないものにはアクセスしてはいけない
user.middleInitial);
