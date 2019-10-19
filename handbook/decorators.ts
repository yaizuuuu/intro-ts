function f() {
    console.log("f(): evaluated");
    return function (target, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log(target, propertyKey, descriptor);
        console.log("f(): called");
    }
}

function g() {
    console.log("g(): evaluated");
    return function (target, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log(target, propertyKey, descriptor);
        console.log("g(): called");
    }
}

class C {
    @f()
    @g()
    method():void {
        console.log('method execute!')
    }
}

function sealed(target) {
    console.log('This is sealed!')
    // do something with 'target' ...
}

@sealed
class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}

new C().method();

console.log(new Greeter('hello'));


