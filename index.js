"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.display = void 0;
function display(user) {
    console.log(user.name, user.age);
}
exports.display = display;
display({ name: 'John', age: 10 });
var x = display({ name: 'John', age: 10 });
var someJson = '{name: "Foo" }';
var someObj;
someObj = JSON.parse(someJson);
someObj.age;
