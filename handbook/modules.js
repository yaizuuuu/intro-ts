"use strict";
// export class Dog { ... }
// export class Cat { ... }
// export class Tree { ... }
// export class Flower { ... }
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
// defaultでexportしたモジュールは{}で名前を指定することなく受け取ることができる
// import <name> from './xxxxxx';
// 単純な値もexportできる
// export default 123
// `module.exports = ~~~` でexportされたモジュールは `import *** from '~~~' を使用できないため以下を使用`
var $ = require("jquery");
$('html');
var lazyload = function () {
    // requireでライブラリを読み込み
    var $ = require("jquery");
};
