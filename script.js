
function convert() {
  const amount = parseFloat(document.getElementById("amount").value);
  const from = document.getElementById("fromCurrency").value;
  const to = document.getElementById("toCurrency").value;
  const result = document.getElementById("result");
  if (isNaN(amount)) {
    result.textContent = "Please enter a valid number";
    return;
  }
  // Dummy rates for example purposes
  const rates = {
    BTC: { USD: 65000, ETH: 15 },
    ETH: { USD: 3500, BTC: 0.067 },
    USDT: { USD: 1, BTC: 0.000015 },
  };
  const rate = rates[from] && rates[from][to];
  if (rate) {
    result.textContent = `${amount} ${from} = ${(amount * rate).toFixed(4)} ${to}`;
  } else {
    result.textContent = "Conversion not available";
  }
}
