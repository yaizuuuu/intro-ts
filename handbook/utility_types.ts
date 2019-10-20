/******************************************************************************/
interface Todo {
    title: string;
    description: string;
}

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
    return {...todo, ...fieldsToUpdate};
}

const todo1 = {
    title: 'tttt',
    description: 'aaaa',
};

const todo2 = updateTodo(todo1, {
    description: 'throw out trash',
});

console.log(todo2);
/******************************************************************************/

/******************************************************************************/
interface Todo2 {
    title: string;
}

const todo: Readonly<Todo2> = {
    title: 'read only',
};

// NG
// todo.title = 'hello';
/******************************************************************************/

/******************************************************************************/
interface PageInfo {
    title: string;
}

type Page = 'home' | 'about' | 'contact';

const x: Record<Page, PageInfo> = {
    about: {title: 'about'},
    home: {title: 'home'},
    contact: {title: 'contact'},
};
/******************************************************************************/

/******************************************************************************/
interface Todo3 {
    title: string;
    description: string;
    completed: boolean;
}

type TodoPreview = Pick<Todo3, 'title' | 'completed'>

const todoPreview: TodoPreview = {
    title: 'title',
    completed: false,
};

type TodoPreview2 = Pick<Todo3, 'description'>

const todoPreview2 = {
    title: 'title',
    completed: true,
};
/******************************************************************************/

/******************************************************************************/
type T0 = Exclude<"a" | "b" | "c", "a">;  // "b" | "c"
/******************************************************************************/

/******************************************************************************/
type T1 = Extract<"a" | "b" | "c", "a" | "f">;  // "a"
/******************************************************************************/

/******************************************************************************/
type T2 = NonNullable<string | number | undefined>;  // string | number
type T3 = NonNullable<string[] | null | undefined>;  // string[]
/******************************************************************************/

/******************************************************************************/
interface Props {
    a?: number;
    b?: string;
}

const obj: Props = {a: 5};

const obj2: Required<Props> = {
    a: 1,
    b: 'b',
};
/******************************************************************************/

/******************************************************************************/
// ThisTypeの機能を使うには--noImplicitThisのオプションを有効にする

type ObjectDescriptor<D, M> = {
    data?: D;
    // DとMを含んだthisを返す
    methods?: M & ThisType<D & M>;
}

function makeObject<D, M>(desc: ObjectDescriptor<D, M>): D & M {
    let data: object = desc.data || {};
    let methods: object = desc.methods || {};
    return { ...data, ...methods } as D & M;
}

let obj20 = makeObject({
    data: { x: 0, y: 0 },
    methods: {
        // dataはここでは含まれていないが型推論で解決
        moveBy(dx: number, dy: number) {
            this.x += dx;  // Strongly typed this
            this.y += dy;  // Strongly typed this
        }
    }
});

obj20.x = 10;
obj20.y = 20;
obj20.moveBy(5, 5);
/******************************************************************************/
