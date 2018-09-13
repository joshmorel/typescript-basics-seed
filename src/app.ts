// type/signature
let sumOrder: (price: number, quantity: number) => number;

// implementation
sumOrder = (x, y) => x * y;

const sum = sumOrder(25, 2);

console.log(`Total sum: ${sum}`);
