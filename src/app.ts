const pizza = {
  name: 'Pepperoni',
  price: 14
};

const toppings = ['pepperoni'];

function createOrder(pizza: object, toppings: string[]) {
  return {
    pizza: pizza,
    toppings: toppings
  }
}

console.log(createOrder(pizza, toppings));
