function updateExpences() {
  const foodInput = document.getElementById("food-Input");
  const foodAmount = parseInt(foodInput.value);
  const rentInput = document.getElementById("rent-Input");
  const rentAmount = parseInt(rentInput.value);
  const clothesInput = document.getElementById("clothes-Input");
  const clothesAmount = parseInt(clothesInput.value);
  const addAllExpence = foodAmount + rentAmount + clothesAmount;
  return addAllExpence;
}

document
  .getElementById("calculation-button")
  .addEventListener("click", function () {
    const addAllExpence = updateExpences();
    // total expences
    const totalExpance = document.getElementById("total-expence");
    totalExpance.innerText = addAllExpence;
    // total Income:
    const totalIncomeField = document.getElementById("total-Income");
    const totalIncome = totalIncomeField.value;
    const netIncome = totalIncome - addAllExpence;
    const Balance = document.getElementById("balance");
    Balance.innerText = netIncome;
  });
