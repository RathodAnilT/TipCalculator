document.getElementById('tip-form').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const billAmount = parseFloat(document.getElementById('bill-amount').value);
    const tipPercentage = parseFloat(document.getElementById('tip-percentage').value);
  
    if (isNaN(billAmount) || billAmount <= 0) {
      alert('Please enter a valid bill amount.');
      return;
    }
  
    const tipAmount = billAmount * (tipPercentage / 100);
    const totalAmount = billAmount + tipAmount;
  
    document.getElementById('result').innerHTML = `
      <p>Tip Amount: $${tipAmount.toFixed(2)}</p>
      <p>Total Amount: $${totalAmount.toFixed(2)}</p>
    `;
  });
  
  document.getElementById('reset-btn').addEventListener('click', function() {
    document.getElementById('bill-amount').value = '';
    document.getElementById('tip-percentage').value = '10';
    document.getElementById('result').innerHTML = '';
  });
  
  