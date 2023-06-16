function convertCurrency() {
    var cadInput = document.getElementById("cadInput").value;
    var usdInput = document.getElementById("usdInput").value;
    var error = document.getElementById("error");
    
    // Data validation
    if (cadInput === "" && usdInput === "") {
      error.textContent = "Please enter a value in CAD or USD field.";
      return;
    }
    
    if (cadInput !== "" && usdInput !== "") {
      error.textContent = "Please enter a value in either CAD or USD field, not both.";
      return;
    }
    
    if (cadInput !== "") {
      // Convert CAD to USD
      // Data validation
      if (isNaN(cadInput) || parseFloat(cadInput) < 0) {
        error.textContent = "Please enter a valid CAD amount.";
        return;
      }
      
      var rate = 0.8; // Hard-coded conversion rate (1 CAD = 0.8 USD)
      var usdAmount = parseFloat(cadInput) * rate;
      
      document.getElementById("usdInput").value = usdAmount.toFixed(3);
      error.textContent = "";
    } else if (usdInput !== "") {
      // Convert USD to CAD
      // Data validation
      if (isNaN(usdInput) || parseFloat(usdInput) < 0) {
        error.textContent = "Please enter a valid USD amount.";
        return;
      }
      
      var rate = 1.25; // Hard-coded conversion rate (1 USD = 1.25 CAD)
      var cadAmount = parseFloat(usdInput) * rate;
      
      document.getElementById("cadInput").value = cadAmount.toFixed(3);
      error.textContent = "";
    }
  }
  