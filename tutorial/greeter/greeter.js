// OK
function greeter(person) {
    return "Hello, " + person;
}
var user = "Jane User";
document.body.textContent = greeter(user);
// NG
// function greeter(person: string) {
//     return "Hello, " + person;
// }
//
// let user = [0, 1, 2];
// document.body.textContent = greeter(user);
