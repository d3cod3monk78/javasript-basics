const defaultResult = 0;
let currentResult = defaultResult;

function getUserNumberInput() {
	return parseInt(userInput.value);
}

function add() {
	const enteredNumber = getUserNumberInput();
	userInput.value = '';
	const calcDescription = `${currentResult} + ${enteredNumber}`;
	currentResult = currentResult + enteredNumber;
	outputResult(currentResult, calcDescription);
}

function subtract() {
	const enteredNumber = getUserNumberInput();
	userInput.value = '';
	const calcDescription = `${currentResult} - ${enteredNumber}`;
	currentResult = currentResult - enteredNumber;
	outputResult(currentResult, calcDescription);
}

function multiply() {
	const enteredNumber = getUserNumberInput();
	userInput.value = '';
	const calcDescription = `${currentResult} * ${enteredNumber}`;
	currentResult = currentResult * enteredNumber;
	outputResult(currentResult, calcDescription);
}

function divide() {
	const enteredNumber = getUserNumberInput();
	userInput.value = '';
	const calcDescription = `${currentResult} / ${enteredNumber}`;
	currentResult = currentResult / enteredNumber;
	outputResult(currentResult, calcDescription);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);