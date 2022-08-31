//static typed
// int user = 34534;
// float city = '';
// string high = ''

// types
// 1. boolean
// 2. string
// 3. number
// 4. undefined
// 5. null
// 6. object

// dynamic typed
// user = 435345
// let user = []
// console.log(typeof user);

// let user = 454;

// user = 45;

// 1. var
// 2. let   scope**
// 3. const

// var --> function scoped
// let and const ---> block scoped

// function sample(){
//     // var usr = 'sdsdf'
//     // let sdf = 3434;
//     // const sddsfsdf = 34534;
//     if(true){
//     // we can use all
//         var limit = 34;
//         let email = "abc@gmail.com";
//         const name = "vinay";
//         console.log(name);
//     }
//     console.log(limit);

// }
// sample()

// var name = "viany";
// //100 lines code
// var name = "sasi";
// console.log(name);

// console.log(name);
// var name = 'vinay'

// let and const diff

// const value = "ravi kumar";
// value = "ravi";
// console.log(value);
 // 2min time taking
// line by line

// 1. synchronous
// 2. asynchronous

// let mobile = 2323423;

// function sample(){
//     setTimeout(function (){
//         console.log(mobile);
//     }, 1000)
// }

// sample();

// console.log("completed...");


// const info = {name: 'vinay', mobile: 2323423};
// console.log(info);
// info.name = "ravi";
// console.log(info);

// const users = ['vinay', 'jayanth', 'kumar'];
// console.log(users);
// users[0] = 'gagan'
// console.log(users);
// saveFile();
// function saveFile(){
//     //logic...
//     console.log('saving file...');
// }
// let saveFile = () => {
//     console.log("arrow function...");
// }
// saveFile()

//  (() => console.log('short syntax...'))();
// function saveFile(user){
//     console.log(`this is info from ${user}`);
// }
// saveFile('vinay')

// let saveFile = (user, city) => console.log(`this is info from ${user} ${city}`);

// saveFile('sasi', 'hyd')

// Promises

// api call

//logic

// callback
// function demo(){
    
// }
// function sample(fst, sec, demo){
// // logic

// // demo()
// }

// Promises

// let promise = getDataFromServer();

// remaining logic
// ....

// 1. resolve
// 2. reject

// const promise = new Promise((resolve, reject)=>{
//     setTimeout(()=>{

//         let timeAvailable = true;
//         if(timeAvailable){
//            resolve('class will be there...')
//         }else{
//            reject('class will not be there...')
//         }
//     }, 5000)
// })
// function successCase(result){
//         console.log(result, 'this is then block');
// }
// function failureCase(error){
//         console.log(error, 'this is catch block');
// }
// promise.then(successCase).catch(failureCase)

// promise.then(userInfo)

// function userInfo(){
//     let name = 'vinay';
//     console.log(name);
//     //100
// }