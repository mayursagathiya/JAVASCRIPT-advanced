let a="this is goku"
let b="aaa bbb ccc"

//length
// console.log(a.length)
// 12

//==========================================

// slice(start, end)
// console.log(a.slice(2,4))
// is
// console.log(a.slice(2))
// is is goku

//==========================================

// substring(start, end) same as slice
// console.log(a.substring(2,4))
//is

//==========================================
// substr(start, length)
// console.log(a.substr(2))
//is is goku
//almst same as slice

//==========================================


//replace
// The replace() method replaces a specified value with another value in a string:
// The replace() method returns a new string.
// method replaces only the first word
// replace(old value, new value)


// console.log(a.replace("this","hello"))
// hello is goku
//====
// const regex=/\s/g
// console.log(a.replace(regex,""))
//==========================================


//indexof()
//aa method ma je str thi search karaviye aena first letter ni index sodhse
//if not found value then it will throw -1
// case sensitive. 
// console.log(a.indexOf("goku"))

//==================
// lastIndexOf
// akkhi string mathi je pan word last sodhse aeni index throw karse
// 1 if the value is not found.
// searches the string from the end to the beginning.
// case sensitive

// console.log(a.lastIndexOf("i"))

//==========================
//search()
//same as indexof
// index throw karse je pan first letter madse aeni 
// console.log(a.search("i"))

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
// const j="    a   b   c    "
// console.log(j.trim())

//===============================
//charat
// Get the first character in a string:
// console.log(a.charAt(5))
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