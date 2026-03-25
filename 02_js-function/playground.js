import readline from "readline";

const EXCHANGE_RATE = 33; // 1 USD = 33 THB

function thbToUsd(thb) {
  return thb / EXCHANGE_RATE;
}

function usdToThb(usd) {
  return usd * EXCHANGE_RATE;
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter amount: ", function (amountInput) {
  const amount = parseFloat(amountInput.trim());

  if (isNaN(amount) || amount < 0) {
    console.log("Invalid amount! Please enter a positive number.");
    rl.close();
    return;
  }

  rl.question("Enter currency (THB or USD): ", function (currencyInput) {
    const currency = currencyInput.trim().toUpperCase();

    if (currency === "THB") {
      const result = thbToUsd(amount);
      console.log(`${amount} THB = ${result.toFixed(2)} USD`);
    } else if (currency === "USD") {
      const result = usdToThb(amount);
      console.log(`${amount} USD = ${result.toFixed(2)} THB`);
    } else {
      console.log("Invalid currency! Please enter THB or USD.");
    }

    rl.close();
  });
});