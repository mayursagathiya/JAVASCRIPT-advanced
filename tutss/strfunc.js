let a="01234567890"
let b="aaa bbb ccc"

//length
// console.log(a.length)
// 12

//==========================================

// slice(start, end) 
// console.log(a.slice(2,7))
// 23456
// console.log(a.slice(2))
// 23456789

//==========================================

// substring(start, end) same as slice
// console.log(a.substring(2,7))
//23456

//==========================================
// substr(start, length)
// console.log(a.substr(2,7))
//2345678
//almst same as slice

//==========================================


//replace
// The replace() method replaces a specified value with another value in a string:
// The replace() method returns a new string.
// method replaces only the first word
// replace(old value, new value)


// console.log(a.replace("4","69"))
//01236956789
//====
// const regex=/\s/g
// console.log(a.replace(regex,"++++++"))
//==========================================


//indexof()
//aa method ma je str thi search karaviye aena first letter ni index sodhse
//if not found value then it will throw -1 
// console.log(a.indexOf("5"))

//==================
// lastIndexOf
// akkhi string mathi je pan word last sodhse aeni index throw karse
// 1 if the value is not found.
// searches the string from the end to the beginning.
// case sensitive

// console.log(a.lastIndexOf("0"))

//==========================
//search()
//same as indexof
// index throw karse je pan first letter madse aeni 
// console.log(a.search("3"))
//3

//=========================
//toupper // tolower
// console.log(a.toLowerCase())
// console.log(a.toUpperCase())

//=======================================
//concat
// banne string nu adddtion karse
// console.log(a.concat(b)) 

//================================
// trim
//deletes spces from begin and end of str
// const j="    aaaaaa   b   c    "
// console.log(j.trim())

//===============================
//charat
// Get the first character in a string:
// console.log(j.charAt(8))
//i

//===================================
//charcodeat
// Get the Unicode of the first character in a string:
// console.log(a.charCodeAt(0))
// 116

//==================================
//split
//returns array
//deletes the char that we use to split 
//akhi string mathi jetla pan letter madse badha j ne split karse
// console.log(a.split("i"))
// [ 'th', 's ', 's goku' ]

