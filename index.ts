export interface User {
    name: string;
    age: number;
}

export function display(user: User) {
    console.log(user.name, user.age);
}

display({ name: 'John', age: 10 });

let x = display({ name: 'John', age: 10 });

const someJson = '{name: "Foo" }';

let someObj;
someObj = JSON.parse(someJson);

someObj.age;
