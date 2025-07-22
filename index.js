//Q1

const printAfterDelay = () => (

     new Promise((resolve,reject) => {
            setTimeout(() => {
                resolve('Hello world !..')
            },2000)
        })
    )

const Q1 = async() => {
    let a = await  printAfterDelay()
    console.log(a);
}
// Q1()

// Q2 

const greek = (name) =>(
        new Promise((resolve,reject) => {
            setTimeout(() => {
                resolve(`Hello  ${name}`)
            },3000)
        })
)
 

const Q2 = async() => {
    const user = await greek("Amit")
    console.log(user);
    
}
// Q2()

//Q3 

const addAfterDelay = (a,b) => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            let sum = a+b
            resolve(sum)
        },1000)
    })
}

const Q3 = async() => {
    let sum = await addAfterDelay(9,11)
    console.log(sum);
    
}
// Q3()

//Q4
const failAfterDelay = (name) => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
              if(name !== ""){
                resolve('Done.. no any error.')
              }  
              reject('Oops!...')
        },2000)
    })

}
const str = ""
const Q4 = async() => {
    try {
        let user = await failAfterDelay(str)
        console.log(user);
        
    } catch (error) {
      console.log(error);
    }
}
// Q4()

// Q5



const countdwon = async(n) => {
       for (let index = n; index >= 1; index--) {
      console.log(index)
      await new Promise(resolve => setTimeout(resolve,1000)) 
       }
       console.log('countdown complete..');    
}
// countdwon(10)

//  q6  
const task1 = () => (
    new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(' complete task 1')
        },2000)
        console.log('Prosessing task 1..');
        
    })
    
)

const task2 = () => (
    new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(' complete task 2')
        },2000)
        console.log('Prosessing task 2..');
        
    })
    
)

const Q6 = async() => {
    let use1 = await task1()
    console.log(use1);
    let use2 = await task2()
    console.log(use2);
    
}
// Q6()
 //Q7

 const Task1 = () => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve('Hello 1')
        },1000)
    })
 }

 const Task2 = () => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve('Hello 2')
        },1000)
    })
 }

//  Promise.all([Task1(),Task2()]).then((res) => {
//     console.log(res);
//  })

//Q8

const Double = (num) => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(num * 2)
        },1000)
    })
}

const square = (num) => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(num * num)
        },1000)
    })
}

const subtractFive = (num) => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(num - 5)
        },1000)
    })
}

const Q8 = async(num) => {
    console.log(`Input value ${num}`)
 let double = await Double(num)
  console.log(`Double ${double}`)
 let sq = await square(double)
 console.log(`Square ${sq}`)
 let sub = await subtractFive(sq)
console.log((`Subtract Five ${sub}`))
 
}

// Q8(5)

//Q9

const maybeSuccees = () => {
    return new Promise((resolve,reject) => {
        const isSuccess = Math.random() > 0.5
        setTimeout(() => {
            isSuccess ? resolve("success") : reject('Faild')
        },500)
    })
}

const Q9 = async() =>{
    let success = false
    while (!success) {
        try {
            let result = await maybeSuccees()
            console.log(result);
            success = true
        } catch (error) {
            console.log(error,'retrying..');
            
        }
    }
}

// Q9()

//Q10

function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function trafficLight() {
  const lights = [
    { color: "🔴 Red", time: 3000 },
    { color: "🟢 Green", time: 2000 },
    { color: "🟡 Yellow", time: 1000 }
  ];

  for (let index = 0; index < 2; index++) {
     for (const light of lights) {
        console.log(light.color);
      await wait(light.time);
     }
  }
  console.log('complete traffic');
  
}

// trafficLight();