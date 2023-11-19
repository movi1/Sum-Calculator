const num1Input = document.getElementById('num1');
const num2Input = document.getElementById('num2');
const calculateBtn = document.getElementById('calculate');
const resultDiv = document.getElementById('result');

calculateBtn.addEventListener('click', () => {
  const num1 = parseFloat(num1Input.value);
  const num2 = parseFloat(num2Input.value);

  const sum = num1 + num2;

  resultDiv.innerHTML = 'Result: ' + sum; 
});


