export interface User {
    name: string;
    age: number;
}

export function display(user: User) {
    console.log(user.name, user.age);
}

display({ name: 'John', age: 10 });
