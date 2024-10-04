const btn = document.getElementById('initial-submit');
const btnBack = document.getElementById('go-back');
const initialForm = document.getElementById('initial-form');
const resultForm = document.getElementById('result-form');
const userBMI = document.getElementById('user-BMI');
const userCategory = document.getElementById('user-category');
const categoryDescription = document.getElementById('category-description');
const isValid = /^[0-9]+(\.[0-9]+)?$/;

resultForm.classList.add('hidden');

btn.addEventListener('click', calculateBMI);

function calculateBMI(e) {
  e.preventDefault();
  const height = parseFloat(document.getElementById('userHeight').value);
  const weight = parseFloat(document.getElementById('userWeight').value);

  if (
    weight <= 0 ||
    height <= 0 ||
    !isValid.test(height) ||
    !isValid.test(weight) ||
    height < 50 ||
    height > 200
  ) {
    alert('Please enter valid weight and height values.');
    return;
  }

  const calculatedBMI = (weight / ((height * height) / 10000)).toFixed(2);

  initialForm.classList.add('hidden');
  resultForm.classList.remove('hidden');

  userBMI.innerHTML = `${calculatedBMI}`;

  if (calculatedBMI <= 18.5) {
    userCategory.innerHTML = 'underweight';
    categoryDescription.innerHTML =
      'A BMI of 18.4 or below is classed as underweight. This suggests you could benefit from gaining weight. Working towards a healthier weight range could strengthen your immune system and help prevent bone fractures.';
  } else if (calculatedBMI > 18.5 && calculatedBMI <= 24.9) {
    userCategory.innerHTML = 'optimum';
    categoryDescription.innerHTML =
      'A BMI between 18.5 and 24.9 is classed as a healthy weight. Try to keep your weight the same or in the healthy weight range for your height. This will help prevent any weight-related health problems, like type 2 diabetes or heart disease.';
  } else if (calculatedBMI >= 25 && calculatedBMI <= 29.9) {
    userCategory.innerHTML = 'overweight';
    categoryDescription.innerHTML =
      'A BMI between 25 and 29.9 is classed as overweight. An overweight result suggests you could benefit from making some healthy changes. If you want to lose some weight, working towards a healthier weight range could reduce the risk of long-term conditions such as type 2 diabetes and heart disease.';
  } else if (calculatedBMI >= 30) {
    userCategory.innerHTML = 'obese';
    categoryDescription.innerHTML =
      'A BMI of 30 or more is classed as obese. An obese result suggests you are carrying too much weight and you would benefit from making some healthy changes. If you want to lose some weight, slowly working towards a healthier weight range could reduce the risk of long-term conditions such as type 2 diabetes and heart disease.';
  } else {
    userBMI.innerHTML = 'invalid value';
    userCategory.innerHTML = 'invalid value';
    categoryDescription.innerHTML = 'Invalid BMI value.';
  }
}

// return back to main menu
btnBack.addEventListener('click', returtToMainMenu);

function returtToMainMenu(e) {
  resultForm.classList.add('hidden');
  initialForm.classList.remove('hidden');
}
