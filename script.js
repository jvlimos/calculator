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
	, addBtn = document.getElementById('add');

	const add = (a, b) => a + b;
	const subtract = (a, b) => a - b;
	const multiply = (a, b) => a * b;
	const divide = (a, b) => a / b;
	const overHundred = (a) => a / 100;
	const negOrPos = (a) => -(a);

	const operate = (operator, a, b) => operator(a, b);

	