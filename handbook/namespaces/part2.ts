// 複数ファイルでnamespaceを分割する場合
/// <reference path="part1.ts" />
namespace Validation2 {
    const lettersRegexp = /^[A-Za-z]+$/;
    export class LettersOnlyValidator implements StringValidator {
        isAcceptable(s: string) {
            return lettersRegexp.test(s);
        }
    }
}