interface Named {
    name: string;
}

class Person {
    name: string;
}

let p: Named;
// OK, because of structural typing
p = new Person();

// 直接オブジェクトを入れる場合はNG
// let p1: Named = {name: 'test', test: 'test'};

let x: Named;
// y's inferred type is { name: string; location: string; }
let y = { name: "Alice", location: "Seattle" };
// 直接入れていないのセーフ
x = y;

function greet(n: Named) {
    console.log("Hello, " + n.name);
}

// OK
greet(y);
// NG, こちらも直接入れているため
// greet({name: 'test', test: 'test'});


enum EventType { Mouse, Keyboard }

interface Event { timestamp: number; }
interface MouseEvent extends Event { xx: number; yy: number }

function listenEvent(eventType: EventType, handler: (n: Event) => void) {
    /* ... */
}

// OK
listenEvent(EventType.Mouse, (e: Event) => console.log((e as MouseEvent).x + "," + (e as MouseEvent).y));
// OK, 継承したものを使っている
listenEvent(EventType.Mouse, (e: MouseEvent) => console.log(e.x + "," + e.y));
listenEvent(EventType.Mouse, ((e: MouseEvent) => console.log(e.x + "," + e.y)) as (e: Event) => void);
// NG, enumと同じ値のnumberが入ったとしてもNG
// listenEvent(EventType.Mouse, (e: number) => console.log(e));



function invokeLater(args: any[], callback: (...args: any[]) => void) {
    /* ... Invoke callback with 'args' ... */
}

// OK
invokeLater([1, 2], (x, y) => console.log(x + ", " + y));
// OK, 任意のパラメータとしても大丈夫
invokeLater([1, 2], (x?, y?) => console.log(x + ", " + y));


class Animal {
    feet: number;
    constructor(name: string, numFeet: number) { }
}

class Size {
    feet: number;
    constructor(numFeet: number) { }
}

let a: Animal;
let s: Size;

a = s;  // OK
s = a;  // OK