<?php
// process_payment.php

// Retrieve form data
$cardNumber = $_POST["cardNumber"];
$expiryDate = $_POST["expiryDate"];
$cvv = $_POST["cvv"];

// Perform payment processing logic here
// ...

// For simplicity, we'll assume the payment always succeeds
// In a real-world scenario, you would need to integrate with a payment gateway

// Return a response to the client
http_response_code(200); // Set HTTP status code
echo "Payment processed successfully!";
?>
