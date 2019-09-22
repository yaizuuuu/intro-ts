interface Person {
    firstName: string
    lastName: string
}

function greeter(person: Person) {
    return `Hello, ${person.firstName} ${person.lastName}`
}

let user = {
    // OK, 型推論の場合, 定義外のものがあっても良い
    firstName: 'Jane',
    lastName: 'User',
    kara: '',
    // NG
    // firstName: 'Jane',
};

// let user: Person = {
//     // NG, 明示的に型指定した場合, 定義外のものがあってはいけない
//     firstName: 'Jane',
//     lastName: 'User',
//     kara: '',
// };

console.log(greeter(user));