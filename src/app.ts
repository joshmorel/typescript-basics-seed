const pizzas = [{ name: 'Pepporoni', toppings: ['pepperoni'] }];

const mappedPizzas = pizzas.map(pizza => pizza.name.toUpperCase());

console.log(mappedPizzas);

const pizza = {
  name: 'Blazing Inferno',
  getName: function() {
    setTimeout(() => {
      console.log(this.name);
    }, 100)
  }
};

pizza.getName();
