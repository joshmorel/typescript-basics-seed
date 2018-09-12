const pizza = {
  name: 'Pepperoni',
  price: 14,
  getName() {
    return this.name;
  }
};
console.log(pizza.getName())

const toppings = ['pepperoni'];

const createOrder = (pizza: object, toppings: string[]) => ({
  pizza,
  toppings
});

console.log(createOrder(pizza, toppings));
