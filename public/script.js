
const num1Input = document.getElementById('num1');
const num2Input = document.getElementById('num2');
const calculateBtn = document.getElementById('calculate');
const resultDiv = document.getElementById('result');



// Add an event listener to the calculate button
calculateBtn.addEventListener('click', () => {
  const num1 = parseFloat(num1Input.value);
  const num2 = parseFloat(num2Input.value);

    // Check if the entered values are valid numbers
  if (isNaN(num1) || isNaN(num2)) {
    // Display an error message if the input is not valid
    resultDiv.innerHTML = 'Please enter valid numbers';
  } else {
    // Calculate the sum of the entered numbers
    const sum = num1 + num2;

     // Display only the sum in the resultDiv
     resultDiv.innerHTML = sum;

    // Add a class to the result element
    resultDiv.classList.add('show-emoji');
  }
});
