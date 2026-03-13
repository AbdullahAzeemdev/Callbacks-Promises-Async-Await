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

const getPromise = () => {
  return new Promise((resolve, reject) => {
  console.log("i am a promise");
  resolve("sucess");
  // reject("error");
 });
};

let promise = getPromise();
promise.then((res) => {
    console.log("promise resolved" , res );
  })

  promise.catch((err) => {
    console.log(" rejected", err);
  });

//callback hell
// function getData(dataId, nextDataId) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data", dataId);
//       resolve("sucess");
//       if (nextDataId) {
//         nextDataId();
//       }
//     }, 5000);
//   });
// }

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
