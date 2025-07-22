
//  https://official-joke-api.appspot.com/jokes/ten

// const e = require("express")

//  var a = 200

//  {
//    var a = 400
//  }
//  console.log(a);
 
 
//  let b = 0;

//  {
//    let b = -400
//  }
//  console.log(b);
 
//  let arr = [1,23,4,45,5]
//   const print = arr.some((value) =>{
//    return value
//  })

//  console.log(print);

//  const greek = ((data,hey) =>{
//    setTimeout(() => {
//       console.log("Data",data);
//       if(hey)
//       hey()
//    },5000)
    
    
//  })
 
//  greek(9,() =>{
//    greek(18,() =>{
//       greek(27,() => {
//          greek(36,() =>{
//             greek(40,() =>{
//                greek(45,() =>{
//                   greek(90,()=>{
//                      greek(67)
//                   })
//                })
//             })
//          })
//       })
//    })
//  })

// const greek = () => {
//    return new Promise((resolve,reject) => {
//       let Error = false

//       if(!Error){
//          console.log("Promiss pending..");
//          resolve("Promiss fullfiald..")
//       }
//       else{
//          reject(Error)
//       }
//     })
// }

// let promiss = greek()

// promiss.then((data) =>{
//    console.log(data);
// }).catch((Error) => {
//    console.log("Error : something wrong data");
// })

// const obj = {
//    name : "Amit Pal",
//    email : "ap034677@gamil.com",
//    Address : "varanasi",
//    isLogin : false
// }

// const ApiData1 = (obj) => {
//    return new Promise((resolve,reject) => {
//       setTimeout(() => {
//          let Error = false
//             console.log("Fetching data first func..");

//             if(obj.isLogin == true){
//                resolve(obj)
//                console.log("Data fullfiald");
               
               
//             }
//             reject("fetching first Data url wrong url..")
            
//       },3000)
//    })
// }
// console.log("fetching first..");

// const ApiData2 = () => {
//    return new Promise((resolve,reject) => {
//       setTimeout(() => {
//          let Error = false
//             console.log("Fetching data second func..");

//             if(!Error){
//                resolve(" Data fullfiald..")
//             }
//             reject("fetchinf second Data url wrong url..")
            
//       },3000)
//    })
// }

// let p1 = ApiData1(obj)

// p1.then((res) => {
//    console.log(res);
//    let p2 = ApiData2()
//    p2.then((res) => {
//       console.log(res);
//    }).catch((error) => {
//       console.log("Error :",error);
      
//    })
// }).catch((error) =>{
//    console.log(error);
// })

// question 1

// const  Q1 = () => {
//    return new Promise((resolve,reject) =>{
//       setTimeout(() => {
//          resolve("Hello from the Promiss")
//       },1000)
//    })
// }

// Q1().then((res) => {
//    console.log(res);
// })

// // Q2

// const Q2 = (num) => {
//  return new Promise((resolve,reject) => {
//    setTimeout(() => {
//       if(num % 2 == 0){
//          resolve(`Even Number ${num}`)
//       }
//       reject(`Odd Number ${num}`)
//    },1000)
//  })
// }

// Q2(9).then((res) => {
//    console.log(res);
// }).catch((error) => {
//    console.log(error);
// })

// //Q3

// const Q3 = () => {
//    return new Promise((resolve,reject) => {
//       setTimeout(() => {
//          resolve("Done waiting..")
//       },2000)
//    })
// }

// Q3().then((res) => {
//    console.log(res);
   
// })

// //Q4

// const First = () => {
//    return new Promise((resolve,reject) => {
//       setTimeout(() => {
//          resolve('Step 1 complete..')
//       })
//    })
// }

// const Second = () =>{
//    return new Promise((resolve,reject) => {
//       setTimeout(() => {
//          resolve('Step 2 complete..')
//       },1000)
//    })
// }

// First().then((res) => {
//    console.log(res)
//    Second().then((res) => {
//       console.log(res);
//    })
   
// })

// //Q5
// const user = {
//    id : 1,
//    name : "Amit"
// }

// const FetchUser = (user) => {
//    return new Promise((resove,reject) => {
//       setTimeout(()=> {
//          resove(`${user.id} : ${user.name} : ${user.id +  user.name}`)
//       },1000)
//    })
// }

// FetchUser(user).then((res) => {
//    console.log(res);
// })

// // Q6

// const Q6 = () =>{
//    return new Promise((resolve,reject) => {
//       setTimeout (() => {
//          let e = false
//          if(!e){
//             resolve("Promiss resolve..")
//          }
//          reject('Reject promiss..')
//       },2000)
//    })
// }

// Q6().then((res) => {
//    console.log(res);
// }).catch((e)=> {
//    console.log(e);
// })

//Q7

// const getUser = () => {
//    return new Promise((resolve,reject) => {
//       console.log('User Name');
      
//       setTimeout(() => {
//          resolve('Amit Pal')
//       },1000)
//    })
// }

// const getPosts = () => {
//    return new Promise((resolve,reject) => {
//       setTimeout(() => {
//          resolve({
//             userName : "simple-smile-heart",
//             user : "Amit Pal"
//          })
//       },1000)
//    })
// }

// const getComments = () => {
//    return new Promise((resolve,reject) => {
//       setTimeout(() => {
//          resolve(" Nice Account..")
//       },1000)
//    })
// }

// // getUser().then((res) => {
// //    console.log(res)
// //    getPosts().then((res) => {
// //       console.log(res)
// //       getComments().then((res) => {
// //          console.log(res); 
// //       })
// //    })
// // })
// Promise.all([getUser,getPosts,getComments]).then(res => Promise.all(res.map(res => res)))
// .then((data) => {
//    console.log(data);
   
// })

//Q8

// const A = () => {
//    return new Promise((resolve,reject) => {
//       setTimeout(() => {
//          resolve(' A win..')
//       }, 2000);
//    })
// }

// const B = () => {
//    return new Promise((resolve,reject) => {
//       setTimeout(() => {
//          resolve(' B win..')
//       },1000);
//    })
// }

// Promise.race([A(),B()]).then((res) => {
//    console.log(res);
   
// })

//Q9

// const Q9 = (str) => {
//    return new Promise((resolve,reject) => {
//       setTimeout(() => {
//          if(str !== ""){
//             resolve(`Hello ${str}`)
//          }
//          reject('Hello ..?')
//       },2000)
//    })
// }
// let str = "Amit"
// Q9(str).then((res) => {
//    console.log(res);
   
// }).catch((e) => {
//    console.log(e);
// })

//Q11

// const user = {
//    userName : "Amit Pal",
//    Password : "1234"
// }

// const login = (user) => {
//     return new Promise((resolve,reject) => {
//       setTimeout(() => {
//          if(user.userName !== "" && user.Password !== ""){
//             resolve(user)
//          }
//          reject('No any user...?')
//       },2000)
//     })
// }

// login(user).then((res) => {
//     return  res
// }).then((data) => {
//    console.log(`user name : ${data.userName} Password : ${data.Password}`);
// }).catch((e) => {
//    console.log(e);
   
// })



// const tryLuck = () => {
//    return new Promise((resolve,reject) => {
     
//           setTimeout(() => {
//          const isWin = Math.random()*3
//              if(isWin){
//                resolve('You Win..!!')
//             }
//             else{
//                reject('You loss..!!')
//             }
           
//       },1000)      
     
//    })
// }

//  tryLuck().then((res) => {
//    console.log(res);
   
// }).catch((e) => {
//    console.log(e);
// })
// let a = prompt("Enter name..")
// let p = prompt("Enter Password")
// const user = (a) => {
//    return new Promise((resolve,reject) => {
//       setTimeout(() => {
//             console.log("Enter Name :",a);
//             resolve(`user name fullFaild.. `)
//       },2000)
//    })
// }

// const Password = (c) => {
// return new Promise((resolve,reject) => {
//    setTimeout(() => {
//       console.log("Enter Password : ",c)
//       resolve(`password fullFaild.. `)
//    },3000)
// })
// }
// let ur = user(a)
// let cr = Password(p)
// const account = async() => {
//    let user = await ur
//    console.log(user)
//    let pass = await cr
//    console.log(pass);
   
// }

 //method 1
const greek = (data,hey) => {
      setTimeout(() => {
         console.log(data)
         if(hey) {
            hey()
         }
         
      },3000)
}

greek("Hello",() => {
   greek("World",() => {
      greek("Entities",() => {
         greek("Atribute",() => {
            greek("Amit")
         })
      })
   })
})

//method 2

const func1  = () => {
   return new Promise((resolve,reject) => {
      setTimeout(() => {
         resolve("Amit")
      })
   })
}

const func2  = () => {
   return new Promise((resolve,reject) => {
      setTimeout(() => {
         resolve("Amit")
      })
   })
}

const func3  = () => {
   return new Promise((resolve,reject) => {
      setTimeout(() => {
         resolve("Amit")
      })
   })
}

func1().then((res) => {
console.log(res)
func2().then((res)=> {
   console.log(res)
   func3().then((res) => {
      console.log(res);
   })
})

}).catch((e) => {
   console.log(e);
   
})

