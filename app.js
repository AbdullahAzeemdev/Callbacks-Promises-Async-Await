//syncronous

// console.log("one");
// console.log("two");
// console.log("three");

//asyncronous

// console.log("one");
// console.log("two");
// setTimeout(() => {
//     console.log("hello");
// }, 4000);
// console.log("three");
// console.log("four");

//callback

// function sum(a,b){
//     console.log(a+b)

// }
// function calculater(a,b, sum){
//     sum(a,b);
// }

// calculater(1,2,sum);

// nested callback

// promise

// const getPromise = () => {
//   return new Promise((resolve, reject) => {
//     console.log("i am a promise");
//     resolve("sucess");
//     // reject("error");
//   });
// };

// let promise = getPromise();
// promise.then((res) => {
//   console.log("promise resolved", res);
// });

// promise.catch((err) => {
//   console.log(" rejected", err);
// });


// promisechaining

// function asyncfunc1(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => { 
//             console.log("data1");
//             resolve("sucess");
//         }, 4000);
//     })
// }


// function asyncfunc2(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => { 
//             console.log("data2");
//             resolve("sucess");
//         }, 4000);
//     })
// };

// console.log("fetching data1.....");
// asyncfunc1().then((res) => {
//     console.log("fetching data2.....");
// asyncfunc2().then((res) => {});
// });










// callback hell

function getData(dataId,) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data", dataId);
      resolve("sucess");
    }, 5000);
  });
}

console.log("fetching data1.....");
getData(1)

.then((res) => {
  console.log("fetching data2....."); 
    return getData(2);
    
})
.then((res) => {
  console.log("fetching data3.....");
    return getData(3);
      
}).then((res) => {
  console.log(res);
});





// getData(1, () => {
//     console.log("getting data2......");
//   getData(2, () => {
//     console.log("getting data3......");
//     getData(3, () => {
//       console.log("getting data4......");
//       getData(4);
//     });
//   });
// });
