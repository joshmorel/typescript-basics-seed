// type/signature
let sumOrder: (price: number, quantity?: number) => number;

// implementation
sumOrder = (x, y) => {
  const q = y || 1;
  return x * q;
}

const sum = sumOrder(25);

console.log(`Total sum: ${sum}`);
