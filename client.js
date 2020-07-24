// define stripe object
const stripe = Stripe('pk_test_51H4YHDAfoYJSaxkzN699e0wYkizVOu8gTyllICcuwTm0OP3L8dQbeLy2Qz49CsJ8J7PVh6vN4E0JWN0X6qjZTXzD00EL3qzueD')

// define checkout button
var checkoutButton = document.getElementById('checkout-button');

// fetch the sessionId from the backend
var response = fetch('http://oneline-backend.herokuapp.com/id').then(function(response) {
  return response.json();
}).then(function(responseJson) {
  var sessionId = responseJson.session_id;
  checkoutButton.addEventListener('click', function() {
    // redirect user to checkout
    stripe.redirectToCheckout({
      sessionId: sessionId
    }).then(function (result) {

      // If `redirectToCheckout` fails due to a browser or network
      // error, display the localized error message to your customer
      // using `result.error.message`.
      console.error(result.error.message)
    });
  });
});