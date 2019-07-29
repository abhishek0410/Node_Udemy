// function sayHello() {
//   setTimeout(() => {
//     console.log("Inside time out ");
//   }, 3000);
//   console.log("After time out ");
// }
// sayHello();

//Making sayHello synchronous, could not make it synhro
nous: // function sayHello_sync(callback) {
//   setTimeout(() => {
//     console.log("Inside time out in sync function ");
//   }, 3000);
//   callback();
// }

// sayHello_sync(() => {
//   console.log("After time out in sync function ");
// });

//Illustrating the callback through Promise

var promise1 = new Promise(function(resolve, reject) {
  setTimeout(function() {
    resolve("foo");
  }, 300);
});

promise1.then(function(value) {
  console.log(value);
  // expected output: "foo"
});
