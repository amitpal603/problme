// var variable = 10;

// (() => {
//     console.log(variable);
//     variable = 20
//     console.log(variable);

// })();

// console.log(variable);
// var variable = 30


// foo = 30

// console.log("foo",foo);



// var foo = 100
// console.log('fOO',foo);

// variable = 10;

// (() => {
//     foo = 100;
//     console.log(variable);
//     var foo = 100
//     variable  = 20;
//     console.log(variable); 
// })()

// // console.log(foo);
// console.log(variable);
// var variable = 30

// 
// var fullname = "Amit pal"

// var obj = {
//     fullname : "Hacked full name",
//     prop : {
//        fullname : "Inside Prop",
//         getFullname : function() {
//             return this.fullname
//         }
//     },
//     getFullname : function () {
//         return this.fullname;
//     },

//     getFullnameV2 : () =>  this.fullname,

//     getFullnameV3 : (function () {
//         return this.fullname
//     })(),

// };

// console.log(obj.prop.getFullname());
// console.log(obj.getFullname());
// console.log(obj.getFullnameV2());
// console.log(obj.getFullnameV3);

// const amit = {
//     name : "Amit PAL",
//     sayName : function() {
//         console.log(this.name);
        
//     }
// }

// const jhon = {
//     name : "jhon Doe",
//     sayName : function () {
//         console.log(this.name);
        
//     }
// }
// // jhon.sayName.call(amit)
// function satName () {
//     console.log(this.name);
    
// }
// satName.call(amit)
const amit = {
    name : "Amit pal",
    satName : function () {
        console.log(this.name);
        
    }
}

  // setTimeout(amit.satName.bind(amit),3*1000);
// setTimeout(() => amit.satName(),3*1000)

let people = [
  {fname : "n", lname : "y"},
  {fname: "k",lname: "y"}

]

// let  dis = people.map((value,index) => {
//   return  value.fname + value.lname
// })
// console.log(dis);

const user = [
  {fname: "amit", lname : "pal", age : 20},
  {fname: "karan", lname : "yadav", age : 21},
  {fname: "pratik", lname : "choudey", age : 23},
  
]



