const numberToCheck = 89;

function generateFibonacci(max) {
	let sequence = [0, 1];
	while (true) {
		let next =
			sequence[sequence.length - 1] + sequence[sequence.length - 2];
		if (next > max) break;
		sequence.push(next);
	}
	console.log(`Fibonacci ${sequence}`);
	return sequence;
}

function isFibonacci(num) {
	if (num < 0) return false;
	const fibonacciSequence = generateFibonacci(num);
	return fibonacciSequence.includes(num);
}

if (isFibonacci(numberToCheck)) {
	console.log(`${numberToCheck} este número está na sequência de Fibonacci.`);
} else {
	console.log(
		`${numberToCheck} este número não está na sequência de Fibonacci.`
	);
}
