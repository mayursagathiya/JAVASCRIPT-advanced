// assgin
// const t = { a: 1, b: 2832325352 };
// const source = { b: 4, c: 5 };

// Object.assign(t, source);
// const a = {...t,...source} // spread opeartor same as object assign

// console.log();

//obj.create
//object ne jyare change na karva devo hoy tyare
// const a={"p":1,"q":2}

// const a=Object.create({
//     "p":1,"q":2
// })
// delete a.p

// console.log(a);

//entries
//aakho object array ma convert karvo hoy to
// const object1 = {
//     a: 'somestring',
//     b: 42
//   };

//   const ent = Object.entries(object1)
//   console.log(ent);



//frz
//object ne modify nai karva deh
// const a={"p":1,"q":2}
// Object.freeze(a)
// delete a.p
// console.log(a); 

// from entries
//arry to object
// const entries = [
//     ['foo'], ['bar'],
//     ['baz', 42]
// ]
// const obj = Object.fromEntries(entries);
// console.log(obj);
// const a=[["y","3"]]
// const obj = Object.fromEntries(a);
// console.log(obj);


// is
// two obj vache same value chhe ke nai ae check karse
// boolean 

// const a={"q":2,"k":2}
// const b={"q":2,"k":2}



// const cmp =Object.is(a.q,b.q)

// console.log(cmp);

//isExtensible
// const a={"q":1}
// // Object.freeze(a)
// // Object.preventExtensions(a)
// const ext = Object.isExtensible(a)
// console.log((ext));


//isfrzn
// const a={"q":1}
// Object.freeze(a)
// const ext = Object.isFrozen(a)
// console.log((ext));

// //isseald
// const a={"q":1}
// Object.freeze(a)
// const ext = Object.isSealed(a)
// console.log((ext));

//keys
//array aapse
// const a={"q":1,"s":2,"g":3}
// const b = Object.keys(a)

// console.log(b);


//instanceof
