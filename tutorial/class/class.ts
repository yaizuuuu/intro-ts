class Student implements Person{
    fullName: string;

    constructor(
        public firstName: string,
        public middleInitial: string,
        public lastName: string) {
        this.fullName = `${firstName} ${middleInitial} ${lastName}`
    }
}

interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    return `Hello, ${person.firstName} ${person.lastName}`
}

// OK
let user: Student = new Student('Jane', 'M.', 'User');
// OK, StudentはPersonを継承しているのでOK
// let user: Person = new Student('Jane', 'M.', 'User');

console.log(
    greeter(user),
    // userがPerson型の場合はNG, Studentを代入したとしても, Person型にないものにはアクセスしてはいけない
    user.middleInitial
);