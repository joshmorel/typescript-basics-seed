let pizzaSlice: string = 'small';

function selectSize(size: 'small' | 'medium' | 'large'): void {
  pizzaSlice = size;
}

selectSize('medium');

console.log(`Pizza size: ${pizzaSlice}`);
