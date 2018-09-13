let pizzaSlice: string = 'small';

function selectSize(size: any): void {
  pizzaSlice = size;
}

selectSize('meduim');

console.log(`Pizza size: ${pizzaSlice}`);
