const pizza = {
  name: 'Pepperoni',
  price: 14,
  getName: function() {
    return this.name;
  }
};

const toppings = ['pepperoni'];

const createOrder = (pizza: object, toppings: string[]) => ({
  pizza,
  toppings
});

console.log(createOrder(pizza, toppings));
