function thankyou() {
    name = document.getElementById("YourFullName").Value;
    email =document.getElementById("Youremailaddress").Value;
    message =document.getElementById("Yourmessage").Value;
    if (Name=="" || surname == "" ) {
        alert ("Please fill in your name before submitting.")
        alert ("Please enter your email address and message before submitting.")
        text = "Thank you for your query, I will be in touch within the next 48 hours."
        document.getElementById("contactform").innerHTML=text
}


}