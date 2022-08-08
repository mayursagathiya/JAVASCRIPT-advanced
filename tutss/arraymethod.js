//foreach
//foreach always array par j use kari sakiye 
//jo bija koi data type par use karvu hoy to array.from thi array ma nakhi sakay and pachi use kari sakay
//darek element par ek var wrk karse 
//kyarey new array create nai kare
const a = "hey there"
const arr = Array.from(a)
// console.log(arr)

// arr.forEach((e) => {
//     console.log(e+"1")
// });

//==============
// indexof()
//str and array banne par use kari sakiye
// console.log(arr.indexOf("t"))

//=========================
// //includes
// // aakhi array ma jo koi element same hase to true moklse
// console.log(arr.includes("h"))
// // true
// console.log(typeof arr.includes("h"))
// //boolean

//===========================
// const found = arr.find(e => e === "e");
// console.log(found);
//===
// const found = arr.find((e) => {
//     const j= e === "e"
//     console.log(j)
// }
// );
// false
// true
// false
// false
// false
// false
// true
// false
// true

//=======================
// findindex 
// const found = arr.findIndex(e => e === "e");
// console.log(found);

//===============
// // filter 
// //function banavu jroori chhe 
// const words = ['spray', 'limit', 'elites', 'exuberant', 'destruction', 'present'];

// const result = words.filter(e => e === "spray");

// console.log(result);

//===========================
// //map 
// // creates a new Array
// // elements par game te kari sakiye, badli pan sakay
// const result = arr.map(e => e+"000000000");
// console.log(result)
// const result =arr.map((e) => {
//     console.log( e+"000000000")
// });

// /===========================
//sort 
// const j=[1,3,112]
// console.log(j.sort())

//================
// console.log(arr.reverse())

//=============
//join
// const arrtostr = arr.join()
// console.log(typeof arrtostr); //str

//======================
// reduce //to-do
// const q1=[1,2,3]
// const jam = q1.reduce((acc,cur,inde,arr)=>{
//     console.log(inde,"==3");
// })
// console.log(jam)

//==========
// reduce right //to-do

//some 
// some thi atleast ek vkht condition satisfy thavi joiye

// const j =[1,2,1,4,5,6,7]
// const func = (e)=>e ===1
// console.log(j.some(func)); 

//every
// badha j element thi satisfy thay to true 
// const j =[1,1]
// const func = (e)=>e ===1
// console.log(j.every(func)); 








