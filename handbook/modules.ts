// export class Dog { ... }
// export class Cat { ... }
// export class Tree { ... }
// export class Flower { ... }
// export * from "module"構文を使用してすべてのエクスポートを結合できる

class ZipCodeValidation {
    isAcceptable(s: string) {

    }
}


export {ZipCodeValidation};
// 同じものに別名をつけてexportできる
export {ZipCodeValidation as mainValidator};

// 外部のモジュールに別名をつけてexportもできる
// 自作のモジュールに他のモジュールのメソッドやクラスを追加してexportしたりするのがユースケース
// export {ZipCodeValidator as RegExpBasedZipCodeValidator} from "./ZipCodeValidator";

// モジュールから単一のexportをインポートする
// import { ZipCodeValidator } from "./ZipCodeValidator";
// 別名もつけれる
// import { ZipCodeValidator as ZCV } from "./ZipCodeValidator";

// import * as validator from './ZipCodeValidator'
// let myValidator = new validator.ZipCodeValidator();


export default interface ExportDefaultInterface {

}
// defaultでexportしたモジュールは{}で名前を指定することなく受け取ることができる
// import <name> from './xxxxxx';
// 単純な値もexportできる
// export default 123
import zip = require('jquery');


// 動的なライブラリの読み込み
// declare function require(moduleName: string): any;
//
// import {ZipCodeValidator as Zip} from "./ZipCodeValidator";
//
// if (needZipValidation) {
//     // requireでライブラリを読み込み
//     let ZipCodeValidator: typeof Zip = require("./ZipCodeValidator");
//     let validator = new ZipCodeValidator();
//     if (validator.isAcceptable("...")) { /* ... */
//     }
// }