"use strict";
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
const getInfo = (name, age) => {
    console.log(`Hello ${name} - ${age}`);
};
getInfo("Hieu", 25);
/**
 * strictNullChecks
 */
let text;
if (Math.random() > 0.8) {
    text = "Hello";
}
;
if (text)
    text.toLocaleLowerCase();
/**
 * TS Data Types
 */
let isDone = true;
let listNumber = [1, 2];
let listUser = ["1", "2"];
let x;
x = ["Hieu", 25];
var STATUS;
(function (STATUS) {
    STATUS["TODO"] = "TODO";
    STATUS["IN_PROGRESS"] = "IN_PROGRESS";
})(STATUS || (STATUS = {}));
let result = "TODO";
if (result === STATUS.TODO) {
    //TODO
}
else if (result === STATUS.IN_PROGRESS) {
    //IN_PROGRESS
}
let notSure = "not sure";
/**
 * Literal Types similar = const only get 1 value, cannot be changed
 */
let numberOne;
numberOne = 1;
const user = {
    id: 1,
    name: "Hieu",
};
// as const để không thay đổi những giá trị bên trong 1 object
// user.name = "Minh Hieu";
const number = [0, 1, 2];
console.log(number);
/**
 * Bữa học cuối cùng
 */
// Advance type typescripts
// Union Type
let margin;
// Object Type
let padding;
padding = { top: "10px", bottom: "10px" };
let player;
player = { name: "hieu", age: 12, email: "something@gmail.com" };
// Function Type
function add(a, b) {
    return a + b;
}
add("hieu", "minh");
// Generic Type
function show(a) {
    return a;
}
show(3);
show("hieu");
let users;
let users2;
users = { name: "hieu", age: 18 };
users2 = { name: "hieu", age: 18, email: "hieu@gmail.com" };
