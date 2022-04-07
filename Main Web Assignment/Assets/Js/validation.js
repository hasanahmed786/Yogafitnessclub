// Email Validation

var email_div = document.getElementById("email_div");
var email_validation_msg = document.createElement("h5");
email_div.appendChild(email_validation_msg);

function Validation() {

  var email = document.getElementById("email").value;

  var pattern = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

  var valid_message = "Your Email Address is valid";
  var invalid_message = "Your Email Address is invalid";

 if (email.match(pattern)) {

   email_validation_msg.innerText = valid_message;
   email_validation_msg.style.color = "#000000";

 }

 else {

   email_validation_msg.innerText = invalid_message;
   email_validation_msg.style.color = "	#FF0000";

 };

  console.log("Email Validated");

}

var submit_button = document.getElementById("submit_button")
