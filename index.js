#! /usr/bin/env node
class Person {
    name;
    age;
    gender;
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    getNameAndAge() {
        return `${this.name} is ${this.age} years old.`;
    }
    static fromJson(jsonString) {
        const { name, age, gender } = JSON.parse(jsonString);
        return new Person(name, age, gender);
    }
}
// Example usage:
const personJson = '{"name": "Alice", "age": 30, "gender": "female"}';
const person = Person.fromJson(personJson);
console.log(person.getNameAndAge());
export {};
