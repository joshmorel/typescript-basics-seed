// function declaration implicitly void in this case
function orderError(error: string): never {
  throw new Error(error);
}

// function expression implicitly never in this case
var orderErrorExp = function(error: string) {
  throw new Error(error)
}

if (Math.random() < 0.5) {
  orderErrorExp('Expression - Something went wrong')
} else {
  orderError('Declaration - Something went wrong')
}
