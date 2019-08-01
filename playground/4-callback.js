// setTimeout(() => {
//   console.log("Two seconds are up");
// }, 2000);

// const geocode = (address, callback) => {
//   setTimeout(() => {
//     const data = {
//       latitude: 0,
//       longitude: 0
//     };
//     return data;
//   });
// };

// const data = geocode("Philadelphia");
// console.log(data);

//CALLBACK FOR ADDITION - Challenege by Andrew Meed

const add = (num1, num2, callback) => {
  let sum = 0;
  setTimeout(() => {
    sum = num1 + num2;
    callback(sum);
  }, 2000);
};

add(1, 4, sum => {
  console.log(sum);
});
