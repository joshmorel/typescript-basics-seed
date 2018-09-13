let pizzaSlice: 'small' | 'medium' | 'large' = 'small';

const selectSize = (size: 'small' | 'medium' | 'large') => {
  pizzaSlice = size;
};

selectSize('large');
console.log(pizzaSlice);
