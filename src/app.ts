const pizzas = [{ name: 'Pepporoni', toppings: ['pepperoni'] }];

const mappedPizzas = pizzas.map(pizza => pizza.name.toUpperCase());

console.log(mappedPizzas);

const pizza = {
  name: 'Blazing Inferno',
  getName: function() {
    setTimeout(function () {
      console.log(this.name); // no good!
    }, 100)
  }
};

pizza.getName();
