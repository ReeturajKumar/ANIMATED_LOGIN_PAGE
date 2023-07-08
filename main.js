// script.js
document.getElementById("paymentForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    
    // Get form values
    var cardNumber = document.getElementById("cardNumber").value;
    var expiryDate = document.getElementById("expiryDate").value;
    var cvv = document.getElementById("cvv").value;
    
    // Send form data to the server
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "process_payment.php", true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        // Payment processed successfully
        alert("Payment successful!");
      } else {
        // Payment failed
        alert("Payment failed. Please try again.");
      }
    };
    var data = "cardNumber=" + encodeURIComponent(cardNumber) +
               "&expiryDate=" + encodeURIComponent(expiryDate) +
               "&cvv=" + encodeURIComponent(cvv);
    xhr.send(data);
  });
  