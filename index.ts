#! /usr/bin/env node
class Person {
    private name: string;
    private age: number;
    private gender: string;
  
    constructor(name: string, age: number, gender: string) {
      this.name = name;
      this.age = age;
      this.gender = gender;
    }
  
    public getNameAndAge(): string {
      return `${this.name} is ${this.age} years old.`;
    }
  
    public static fromJson(jsonString: string): Person {
      const { name, age, gender } = JSON.parse(jsonString);
      return new Person(name, age, gender);
    }
  }
  
  // Example usage:
  const personJson = '{"name": "Alice", "age": 30, "gender": "female"}';
  const person = Person.fromJson(personJson);
  console.log(person.getNameAndAge());
  