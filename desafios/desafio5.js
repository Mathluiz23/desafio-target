const originalString = "Target";

function reverseString(str) {
	let reversedString = "";

	for (let i = str.length - 1; i >= 0; i--) {
		reversedString += str[i];
	}

	return reversedString;
}

const result = reverseString(originalString);

console.log(`String original: ${originalString}`);
console.log(`String invertida: ${result}`);
