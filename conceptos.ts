// Tipos Primitivos

// Boolean
let isDone: boolean = false;
let isActive = false;
// number
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
let big: bigint = 100n;

// string
let color: string = "blue";
let fullName: string = `Bob Bobbington`;
let age: number = 37;
let sentence: string = `Hello, my name is ${fullName}. I'll be ${age} years old next month.`;

// bigint
let bigIntValue: bigint = 9007199254740991n;

// Symbol
let sym1: symbol = Symbol();
let sym2: symbol = Symbol("key");


// interfaces   
interface Person {name: string; age: number;}
const estudiante: Person = {name: "Juan", age: 20}; 
console.log(    `El estudiante ${estudiante.name} tiene ${estudiante.age} años.`);

// types

type Point = {x: number; y: number;};
const point: Point = {x: 10, y: 20};
console.log(`El punto tiene coordenadas x: ${point.x} y y: ${point.y}.`);

// arrays
let list: number[] = [1, 2, 3];
let list2: Array<number> = [4, 5, 6];

// objects
let person: {name: string; age: number;} = {name: "Alice", age: 30};
console.log(`La persona ${person.name} tiene ${person.age} años.`);

//functions
function add(x: number, y: number): number {
    return x + y;
}


