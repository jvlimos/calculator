const clearBtn = document.getElementById('clear')
	, negOrPosBtn = document.getElementById('negOrPos')
	, overHundredBtn = document.getElementById('overHundred')
	, backspaceBtn = document.getElementById('backspace')
	, sevenBtn = document.getElementById('7')
	, eightBtn = document.getElementById('8')
	, nineBtn = document.getElementById('9')
	, divideBtn = document.getElementById('divide')
	, fourBtn = document.getElementById('4')
	, fiveBtn = document.getElementById('5')
	, sixBtn = document.getElementById('6')
	, multiplyBtn = document.getElementById('multiply')
	, oneBtn = document.getElementById('1')
	, twoBtn = document.getElementById('2')
	, threeBtn = document.getElementById('3')
	, subtractBtn = document.getElementById('subtract')
	, decimalPointBtn = document.getElementById('decimalPoint')
	, zeroBtn = document.getElementById('0')
	, equalsBtn = document.getElementById('equals')
	, addBtn = document.getElementById('add')
	, scrn = document.getElementById('screen');

// Number Input
	scrn.textContent = '0';

	zeroBtn.addEventListener('click', () => {
		if (scrn.textContent == '0') return;
		scrn.textContent += '0';
	});

	oneBtn.addEventListener('click', () => {
		if (scrn.textContent == '0') {
			scrn.textContent = '1';
		} else {
			scrn.textContent += '1';
		}
	});

	twoBtn.addEventListener('click', () => {
		if (scrn.textContent == '0') {
			scrn.textContent = '2';
		} else {
			scrn.textContent += '2';
		}
	});

	threeBtn.addEventListener('click', () => {
		if (scrn.textContent == '0') {
			scrn.textContent = '3';
		} else {
			scrn.textContent += '3';
		}
	});

	fourBtn.addEventListener('click', () => {
		if (scrn.textContent == '0') {
			scrn.textContent = '4';
		} else {
			scrn.textContent += '4';
		}
	});

	fiveBtn.addEventListener('click', () => {
		if (scrn.textContent == '0') {
			scrn.textContent = '5';
		} else {
			scrn.textContent += '5';
		}
	});

	sixBtn.addEventListener('click', () => {
		if (scrn.textContent == '0') {
			scrn.textContent = '6';
		} else {
			scrn.textContent += '6';
		}
	});

	sevenBtn.addEventListener('click', () => {
		if (scrn.textContent == '0') {
			scrn.textContent = '7';
		} else {
			scrn.textContent += '7';
		}
	});

	eightBtn.addEventListener('click', () => {
		if (scrn.textContent == '0') {
			scrn.textContent = '8';
		} else {
			scrn.textContent += '8';
		}
	});

	nineBtn.addEventListener('click', () => {
		if (scrn.textContent == '0') {
			scrn.textContent = '9';
		} else {
			scrn.textContent += '9';
		}
	});

	// Decimal point
	decimalPointBtn.addEventListener('click', () => {
		if (scrn.textContent.includes('.')) return;
		scrn.textContent += '.';
	});

// Clears scrn data
	clearBtn.addEventListener('click', () => {
		scrn.textContent = '0';
	});

	backspaceBtn.addEventListener('click', () => {
		scrn.textContent = scrn.textContent.slice(0, scrn.textContent.length - 1);
		if (scrn.textContent == '') scrn.textContent = 0;
	});

// Operator Functions
	const add = (a, b) => a + b;
	const subtract = (a, b) => a - b;
	const multiply = (a, b) => a * b;
	const divide = (a, b) => {
		if (b == 0) return undefined;
		return a / b;
	};
	
	const overHundred = (a) => a / 100;
	const negOrPos = (a) => -(a);

	const operate = (operator, a, b) => operator(a, b);



	