interface Cloner {
    clone(animal: string): string;
}

interface Cloner {
    clone(animal: number): number;
}

interface Cloner {
    clone(animal: boolean): boolean;
    clone(animal: undefined): undefined;
}

// 上記のように複数宣言を行うと下記のようにマージされる
// interface Cloner {
//     clone(animal: string): string;
//     clone(animal: number): number;
//     clone(animal: boolean): boolean;
//     clone(animal: undefined): undefined;
// }

