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

// `module.exports = ~~~`(CommonJS) でexportされたモジュールは `import *** from '~~~'(ESModule) を使用できないため以下を使用`
// import $ = require("jquery");
import * as $ from 'jquery'
$('html');


declare function require(moduleName: string): any;

// 動的なライブラリの読み込み
import jQuery = require('jquery');

const lazyload = function () {
    // requireでライブラリを読み込み
    const $: typeof jQuery = require("jquery");
};


