function calculateTip() {
  const cost = document.getElementById("cost").value;
  const tipPercentage = document.getElementById("tipPercentage").value;

  const tipAmount = (cost * tipPercentage).toFixed(2);
  const totalBill = (parseFloat(cost) + parseFloat(tipAmount)).toFixed(2);

  const output = document.querySelector(".output");
  output.innerHTML = `<h1>You should tip $${tipAmount} on $${cost}.</h1><p>The total bill will be $${totalBill}.</p>`;
}
