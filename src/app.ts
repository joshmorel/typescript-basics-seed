function sumAll(arr: number[]) {
  return arr.reduce((prev, next) => prev + next);
}

const sum = sumAll([1, 2, 3, 4, 5]);

console.log(sum);
