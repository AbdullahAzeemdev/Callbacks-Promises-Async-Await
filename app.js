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

//callback hell

function getData(dataId, nextDataId) {
  setTimeout(() => {
    console.log("data", dataId);
    if (nextDataId) {
      nextDataId();
    }
  }, 2000);
}

getData(1, () => {
    console.log("getting data2......");
  getData(2, () => {
    console.log("getting data3......");
    getData(3, () => {
      console.log("getting data4......");
      getData(4);
    });
  });
});
