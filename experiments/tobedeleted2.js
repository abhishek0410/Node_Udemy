function sayHello(name, age) {
  this.name = name;
  this.age = age;
}

const p1 = new sayHello("Abhi", 25);

//console.log(p1.name);

const p2 = sayHello("ger", 28);
console.log(p2.name);
