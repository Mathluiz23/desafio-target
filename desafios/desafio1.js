const index = 13;

function calculateSum(n) {
  let sum = 0;
  let k = 0;

  while (k < n) {
    k += 1;
    sum += k;
  }

  return sum;
}

const result = calculateSum(index);

console.log(`O valor da variável SOMA é ${result}.`);

