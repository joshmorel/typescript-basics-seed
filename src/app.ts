type Size = 'small' | 'medium' | 'large';
type Callback = (size: Size) => void;

let pizzaSlice: Size = 'small';

const selectSize: Callback = (x) => {
  pizzaSlice = x;
};

selectSize('large');
console.log(pizzaSlice);
