const pizza = {
  name: 'Pepperoni',
  toppings: ['pepperoni', 'bacon', 'mushrooms']
};

const { name: pizzaName, toppings: pizzaToppings } = pizza;

const [ firstTopping, secondTopping, thirdTopping ] = pizzaToppings

console.log(pizzaName);
console.log(firstTopping, secondTopping, thirdTopping);
