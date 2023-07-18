document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();
  calculateSurplus();
});

function calculateSurplus() {
  const checking = document.getElementById("checking").value;
  const credit = document.getElementById("credit").value;
  const availableAfterCredit = checking - credit;
  const checkingBills = 3224;

  const surplus = availableAfterCredit - checkingBills;

  document.getElementById("total").innerText = `Your surplus is $${surplus}.`;
}
