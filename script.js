
document.getElementById('bmiForm').addEventListener('submit', function (e) {
    e.preventDefault(); 

    
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100; 

   
    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        alert('Please enter valid positive values for weight and height.');
        return;
    }

   
    const bmi = weight / (height * height);

   
    const bmiResult = document.getElementById('bmiResult');
    const bmiCategory = document.getElementById('bmiCategory');

    bmiResult.textContent = bmi.toFixed(2);

    
    if (bmi < 18.5) {
        bmiCategory.textContent = 'Underweight';
        bmiCategory.style.color = 'blue';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        bmiCategory.textContent = 'Normal weight';
        bmiCategory.style.color = 'green';
    } else if (bmi >= 25 && bmi < 29.9) {
        bmiCategory.textContent = 'Overweight';
        bmiCategory.style.color = 'yellow';
    } else {
        bmiCategory.textContent = 'Obese';
        bmiCategory.style.color = 'red';
    }
});
