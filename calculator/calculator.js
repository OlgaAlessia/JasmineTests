window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {

  const values  = { amount: 15000, years: 3, rate: 43 };

  const amountUI = document.getElementById("loan-amount");
  amountUI.value = values.amount;
  const yearsUI = document.getElementById("loan-years");
  yearsUI.value = values.years;
  const rateUI = document.getElementById("loan-rate");
  rateUI.value = values.rate;

  update();
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  const currentUIValues = getCurrentUIValues();
  const monthlyPayment = calculateMonthlyPayment(currentUIValues);
  updateMonthly(monthlyPayment);
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  
  const p = values.amount;      // P = Amount of principle
  const i = (values.rate / 100) / 12;   // i = periodic interest rate (in our case yearly rate ÷ 12)
  const n = values.years * 12;  // n = total number of payments (years × 12)

  //monthlyP = ( 𝑃 × 𝑖 ) / ( 1 − ( 1 + 𝑖 ) pow (−𝑛) )
  const monthlyP = ( p * i )  / ( 1 - Math.pow((1 + i), -n) );

  return monthlyP.toFixed(2);
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  const monthlyPayment = document.getElementById("monthly-payment");
  monthlyPayment.innerText =  "$ " + monthly;
}


function cancellValue(){
  document.getElementById("loan-amount").value = "";
  document.getElementById("loan-years").value = "";
  document.getElementById("loan-rate").value = "";
}