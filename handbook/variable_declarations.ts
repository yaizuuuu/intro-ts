function f() {
    let x = 100;
}

function g() {
    let x = 10;
    // var x = 10;
}

class C {
    p = 12;

    m() {
    }
}

let c = new C();
let clone = {...c};
console.log(clone.p);
// NG, スプレット演算子で展開するとメソッドを失う
// console.log(clone.m());
