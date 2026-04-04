import readline from "readline";

// กำหนดอัตราแลกเปลี่ยน (สมมติให้ 1 USD = 35 THB)
const EXCHANGE_RATE = 35.0;

// ฟังก์ชันแปลงเงินบาทเป็นดอลลาร์
function thbToUsd(thb) {
  return thb / EXCHANGE_RATE;
}

// ฟังก์ชันแปลงดอลลาร์เป็นเงินบาท
function usdToThb(usd) {
  return usd * EXCHANGE_RATE;
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// เริ่มต้นถามจำนวนเงิน
rl.question("Enter the amount: ", function (amountInput) {
  const amount = parseFloat(amountInput);

  // ตรวจสอบว่าผู้ใช้พิมพ์ตัวเลขที่ถูกต้องหรือไม่
  if (isNaN(amount)) {
    console.log("Invalid amount! Please enter a valid number.");
    rl.close();
    return; // หยุดการทำงานหากไม่ใช่ตัวเลข
  }

  // ถามสกุลเงินต้นทางที่ต้องการแปลง
  rl.question("Enter currency to convert FROM (THB or USD): ", function (currencyInput) {
    const currency = currencyInput.trim().toUpperCase();
    let result;

    // ตรวจสอบเงื่อนไขและคำนวณ
    if (currency === "THB") {
      result = thbToUsd(amount);
      console.log(`${amount.toFixed(2)} THB is approximately ${result.toFixed(2)} USD`);
    } else if (currency === "USD") {
      result = usdToThb(amount);
      console.log(`${amount.toFixed(2)} USD is approximately ${result.toFixed(2)} THB`);
    } else {
      console.log("Invalid currency! Please enter THB or USD.");
    }

    rl.close();
  });
});