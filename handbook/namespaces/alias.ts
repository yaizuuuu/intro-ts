// namespaceごとexportできる
namespace Shapes {
    // 単一のclassごとexportしたほうがわかりやすいので注意
    export namespace Polygons {
        export class Triangle {
            
        }
        export class Square {
            
        }
    }
}

import Polygons = Shapes.Polygons;

let sq = new Polygons.Square();


// Typescript対応していない外部ファイルの型定義などを行う
declare namespace D3 {
    export interface Selectors {
        select: {
            (selector: string): Selection;
            (element: EventTarget): Selection;
        };
    }

    export interface Event {
        x: number;
        y: number;
    }

    export interface Base extends Selectors {
        event: Event;
    }
}

// 外部ファイルのロジックを使用する際, declareで定義した型を指定する
declare var d3: D3.Base;