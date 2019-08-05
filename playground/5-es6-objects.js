//Object property shorthanf

const name = "Andrew";
const userAge = 27;

const user = {
  name,
  age: userAge,
  location: "Philadelphia"
};

console.log(user);

//Object destrucring :
const product = {
  label: "Red Notebook",
  price: 3,
  stock: 201,
  salePrice: undefined,
  rating: 4.2
};

const { label: productLabel, stock, rating = 5 } = product;
console.log(stock);
console.log(productLabel);

const transaction = (type, { label, stock }) => {
  console.log(type, label, stock);
};

transaction("Order", product);
