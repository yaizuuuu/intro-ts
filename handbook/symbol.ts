// declare function Symbol(key?: string | number): any;
// tsc --target es6 でコンパイルする必要あり

let sym1 = Symbol();

let sym2 = Symbol("key"); // optional string key
