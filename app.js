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

//------- Destructuring ------

// var jobs = {
//     jobName: "programming",
//     jobSallary: 20000000
// }

// Example ES5
// var name = ["hanif","rasya"]
// var hanif = name[0];
// var rasya = name[1];

// console.log(hanif,rasya);

// var jobName = jobs.jobName;
// var sallary = jobs.jobSallary;

// console.log(jobName,sallary);

// Example ES6
// const [hanif,rasya] = ["hanif","rasya"]
// console.log(hanif,rasya);

// const {jobName,jobSallary} = jobs;
// console.log(jobName,jobSallary)

//------- Spread Operator ------

// function addNames(a,b,c) {
//     return a + b + c
// }

// Example ES5
// var names = ['fikri','ihsanul','abiyyu'];
// var names2 = addNames.apply(null,names);
// console.log(names2)

// Example ES6
// const name3 = addNames(...names);
// console.log(name3)

//------- Rest Operator ------

//Example ES5

// function names() {
//     var arrNames = Array.prototype.slice.call(arguments,1)

//     arrNames.forEach(function(el){
//         console.log(el);
//     })
// }

// names('sarah','hanifah');

//Example ES6
// function names6(...names) {
//     names.forEach(el=>console.log(el));
// }

// names6('arif','widya')

// ------- Default Parameter --------

// Example ES5 
// function number(number1, number2) {
//     number1 === undefined ? number1 = 12 : number1 = number1;
//     number2 === undefined ? number2 = 10 : number2 = number2;

//     console.log(number1,number2);
// }

// number()

// Example ES6 
// function number6(number1=12,number2=10) {
//     console.log(number1,number2);
// }

// number6(23)

// --------Maps---------
const age = new Map();
age.set('question',"what is your age ?");
age.set(1, 12);
age.set(2, 10);

console.log(age.get('question'));
console.log(age.entries());