function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = {
    // OK, 型推論の場合, 定義外のものがあっても良い
    firstName: 'Jane',
    lastName: 'User',
    kara: ''
};
// let user: Person = {
//     // NG, 明示的に型指定した場合, 定義外のものがあってはいけない
//     firstName: 'Jane',
//     lastName: 'User',
//     kara: '',
// };
console.log(greeter(user));
