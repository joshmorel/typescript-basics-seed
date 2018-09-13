type size = 'small' | 'medium' | 'large';

let pizzaSlice: size = 'small';

const selectSize = (size: size) => {
  pizzaSlice = size;
};

selectSize('large');
console.log(pizzaSlice);
