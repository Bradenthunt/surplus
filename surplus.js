document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();
  calculateSurplus();
});

function chaChing(surplus) {
  const kachingSound = new Audio("./kaching.mp3");
  const wompSound = new Audio("./wompwomp.mp3");
  const button = document.getElementById("button");

  button.addEventListener("click", () => {
    if (surplus > 0) kachingSound.play();
    else wompSound.play();
  });
}

function calculateSurplus() {
  const checking = document.getElementById("checking").value;
  const credit = document.getElementById("credit").value;
  const availableAfterCredit = checking - credit;

  const checkingBills = {
    mortgage: 2349,
    autoInsurance: 93,
    electricity: 70,
    gas: 75,
    carPayment: 525,
    solarPayment: 112,
  };

  let billsTotal = 0;
  for (let bill in checkingBills) {
    billsTotal += checkingBills[bill];
  }

  const surplus = availableAfterCredit - billsTotal;

  chaChing(surplus);

  document.getElementById("total").innerText = `Your surplus is $${surplus}.`;
}
