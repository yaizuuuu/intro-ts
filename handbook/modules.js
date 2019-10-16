"use strict";
// export * from "module"構文を使用してすべてのエクスポートを結合できる
exports.__esModule = true;
var ZipCodeValidation = /** @class */ (function () {
    function ZipCodeValidation() {
    }
    ZipCodeValidation.prototype.isAcceptable = function (s) {
    };
    return ZipCodeValidation;
}());
exports.ZipCodeValidation = ZipCodeValidation;
exports.mainValidator = ZipCodeValidation;
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
