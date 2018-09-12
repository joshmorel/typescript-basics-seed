const pizza = {
  name: 'Pepperoni',
  price: 14
};

const toppings = ['pepperoni'];

const createOrder = (pizza: object, toppings: string[]) => ({
  pizza,
  toppings
});

console.log(createOrder(pizza, toppings));
