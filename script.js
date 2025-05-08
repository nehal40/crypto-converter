async function convert() {
  const amount = document.getElementById('amount').value;
  const toCurrency = document.getElementById('toCurrency').value;
  const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=' + toCurrency);
  const data = await response.json();
  const rate = data.bitcoin[toCurrency];
  const result = amount * rate;
  document.getElementById('result').textContent = result.toFixed(2) + ' ' + toCurrency.toUpperCase();
}
