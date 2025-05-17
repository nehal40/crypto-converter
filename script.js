function convert() {
  const amount = parseFloat(document.getElementById("amount").value);
  const from = document.getElementById("fromCurrency").value;
  const to = document.getElementById("toCurrency").value;
  let rate = 1;

  if (from === "BTC" && to === "USD") rate = 65000;
  else if (from === "ETH" && to === "USD") rate = 3500;
  else if (from === "USDT" && to === "USD") rate = 1;
  else if (from === "BTC" && to === "EUR") rate = 60000;
  else if (from === "ETH" && to === "EUR") rate = 3200;
  else if (from === "BTC" && to === "SAR") rate = 243000;
  else rate = 1;

  document.getElementById("result").innerText = `Result: ${(amount * rate).toFixed(2)} ${to}`;
}
