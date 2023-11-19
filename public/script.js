const num1Input = document.getElementById('num1');
const num2Input = document.getElementById('num2');
const calculateBtn = document.getElementById('calculate');
const resultDiv = document.getElementById('result');




calculateBtn.addEventListener('click', () => {
  const num1 = parseFloat(num1Input.value);
  const num2 = parseFloat(num2Input.value);

  if (isNaN(num1) || isNaN(num2)) {
    resultDiv.innerHTML = 'Please enter valid numbers';
  } else {
    const sum = num1 + num2;
    resultDiv.innerHTML = 'Result: ' + sum; 
  }
});