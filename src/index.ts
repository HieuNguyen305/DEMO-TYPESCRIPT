/**
 * Static Type Checking
 */
// const mess = "Cybersoft";
// mess(); => error
// const obj = {};
// obj.map(); // => error
/**
 * Types for Tooling 
 */
// const arr = ["Hieu, Hieu 1, Hieu 2"];
// arr.some();
/**
 * Inferred Types
 */
let mess = "Cybersoft";
let age = 18;

/**
 * Erased Types
 */
const getInfo = (name: any, age: any) => {
    console.log(`Hello ${name} - ${age}`);

};
getInfo("Hieu", 25);

/**
 * strictNullChecks
 */
let text;
if (Math.random() > 0.8) {
    text = "Hello";
};

if (text) text.toLocaleLowerCase();

/** 
 * TS Data Types
 */
let isDone: boolean = true;
let listNumber: number[] = [1, 2];
let listUser: Array<string> = ["1", "2"];

let x: [string, number];
x = ["Hieu", 25];

enum STATUS {
    TODO = "TODO",
    IN_PROGRESS = "IN_PROGRESS",
}

let result = "TODO";
if (result === STATUS.TODO) {
    //TODO
} else if (result === STATUS.IN_PROGRESS) {
    //IN_PROGRESS
}

let notSure: any = "not sure";

/**
 * Literal Types similar = const only get 1 value, cannot be changed
 */
let numberOne: 1;
numberOne = 1;

const user = {
    id: 1,
    name: "Hieu",
} as const;

// as const để không thay đổi những giá trị bên trong 1 object

// user.name = "Minh Hieu";

const number = [0, 1, 2] as const;
console.log(number);

/**
 * Type Assertion
 */
const checkStatus = (status: "active") => status = "active";

// let stringStatus: "active" = "active";
// checkStatus(stringStatus);

let stringStatus = "active";
checkStatus(stringStatus as "active");

/**
 * Type Alias
 */
type UserInput = string;
const username: UserInput = "Hieu";

// type Point = {
//     x: number;
//     y: number;
//     z?: number; // optinal
// };

// const point: Point = {
//     x: 5,
//     y: 10,
// }

/**
 * Union Type (|)
 */
type ID = string | number;
const id: ID = 123;

/**
 * Intersection Type (&)
 */

// type Animal = {
//     name: string;
// };

// type Favorite = {
//     honey: boolean;
// };

// type Bear = Animal & Favorite;

// const bear: Bear = {
//     name: "Winnie The Pooh",
//     honey: true,
// };

/**
 * Interfaces
 */
interface Point {
    x: number;
    y: number;
    z?: number; // optional
};

const point: Point = {
    x: 1,
    y: 3,
}

interface Student {
    id: number | string;
    fullname: string;
    gender: "male" | "female";
};

const student: Student = {
    id: "T152146",
    fullname: "Nguyễn Mai Minh Hiếu",
    gender: "male",
}

interface Animal {
    name: string;
}
interface Favorite {
    honey: boolean;
};

interface Bear extends Animal, Favorite { }
const bear: Bear = {
    name: "Donky",
    honey: false,
}

/**
 * Generic Type
 */
const fruitList: Array<string> = ["apple", "watermelon", "banana"];
interface Person {
    id: number | string;
    name: string;
    age: number;
}

const listPerson: Array<Person> = [
    { id: 1, name: "Hieu", age: 18, },
    { id: 2, name: "Bi", age: 19, },
    { id: 3, name: "Way", age: 20, },
];

/**
 * Key of Type Operator
 */
interface People {
    name: string;
    age: number;
};

type PeopleKeys = keyof People;
const KeyName: PeopleKeys = "name";
const keyAge: PeopleKeys = "age";

/**
 * Mapped Type
 */
interface User{
    name: string;
    age: number;
}
type MappedType = {
    [Key in keyof User]: boolean;
};

const mappedType: MappedType = {
    name: true,
    age: false,
};

