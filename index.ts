//Infer types(Implicit Types)
// let userName = "helloworld"
// userName = 3000
// console.log(userName);

//Defining Types (Explicit Types)
// let userName: string = "Hello world";
// let numbers: number = 30000;
// let isLogin: boolean = true;
// let skills: string[] = ["js", "css", "ts"];
// let count: number[] = [1, 2, 3, 4, 5];
// let userDeatils: { name: string; age: number } = {
//   name: "Madhav",
//   age: 22,
// };

//Interface

// interface Details{
//   name:string;
//   age:number;
//   getName: () => void;
// }

// let userDeatils:  Details = {
//   name: "Madhav",
//   age:22,
//   getName() {
//     console.log(this.name);

//   },
// };

//Type

// type Details = {
//   name: string;
//   age: number;
//   getName: () => void;
// };

// let userDeatils:  Details = {
//   name: "Madhav",
//   age:22,
//   getName() {
//     console.log(this.name);

//   },
// };

// Union/Optional

// type Details = {
//   name: string;
//   age: number | string;
//   getName: () => void;
// };

// let userDeatils:  Details = {
//   name: "Madhav",
//   age:"22",
//   getName() {
//     console.log(this.name);

//   },
// };

// let skills: (string | number | boolean)[] = ["js", "css", "ts", 12, 33,false];

// Functions

// type Details = {
//   name: string;
//   age: number | string;
//   getName: () => void;
// };

// let userDeatils: Details = {
//   name: "Madhav",
//   age: "22",
//   getName() {
//     console.log(this.name);
//   },
// };

// function getUserName(userDeatils: Details) {
//   return userDeatils.name;
// }

// getUserName(userDeatils);
