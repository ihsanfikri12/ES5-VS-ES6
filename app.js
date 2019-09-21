//------ String-------

// EXAMPLE ES5

// var name = "fikri";

// console.log("my name is " + name);

// // Example ES6 
// var name6 = "Hani";

// console.log(`my name is ${name6}`);

//------ Var Let Const-------

// Example ES5
// var jobs = "architect";

// for (var i = 0; i<1; i++) {
//     var jobs = "engineering";
//     console.log (jobs)
// }

// console.log(jobs);

// Example ES6
// let jobs6 = "teacher";

// for(let i = 0; i<1; i++) {
//     let jobs6 = "police";
//     console.log(jobs6);
// }

// console.log(jobs6)

//------- Block vs IIFEs------

// Example ES5
// (function () {
//     var name = "Ahmad";
//     console.log(name);
// })()

// Example ES6
// {
//     const name = "Zaki";
//     console.log(name);
// }

//------- Arrow Function------

// var year = [1980,1990,1995]

// // Example ES5 
// var ages5 = year.map(function (el) {
//     return 2016-el;
// });

// console.log(ages5);

// // Example ES6

// var ages6 = year.map((el,index) => 2016-el);

// console.log(ages6);

//------- Arrow Function 2 ------

// var person = function (name,jobs,age) {
//     this.name = name;
//     this.jobs = jobs;
//     this.age = age;
// }

// Example ES5
// person.prototype.work = function (work) {
//     var nameWork = work.map(function(el){
//         return "i am work at " + this.jobs + ", my last job is " +el
//     }.bind(this));

//     console.log(nameWork);
// }

// var work = ["small","vile","go","tham"]
// var andi = new person("andi","cost",20);

// andi.work(work);

//Example ES6

// person.prototype.work6 = function (work) {
//     var nameWork6 = work.map(el => `i am work at ${this.jobs} , my last job is ${el}`)
//     console.log(nameWork6);
// }

// const work = ["justice","league","avenger"];
// const rasya = new person("rasya","harpot",18);

// rasya.work6(work)

