document.getElementById("feedbackForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var rating = document.getElementById("rating").value;
    var comment = document.getElementById("comment").value;
  
    var errorMessages = "";
    if (!name.trim()) {
      errorMessages += "Name is required.\n";
    }
    if (!email) {
      errorMessages += "Email is required.\n";
    }
    if (!rating) {
      errorMessages += "Rating is required.\n";
    }
    if (email && !isValidEmail(email)) {
      errorMessages += "Invalid email format.\n";
    }

    if (errorMessages) {
      document.getElementById('errorMessage').style.display = "block";
      document.getElementById('errorMessage').innerText = errorMessages;
      return;
    }else{
      document.getElementById('errorMessage').style.display = "";
    }

    var formData = {
      name: name,
      email: email,
      rating: rating,
      comment: comment
    };

    console.log("Form data:", formData);

    document.getElementById("feedbackForm").style.display = "none";
    document.getElementById("confirmation").style.display = "block";
});

function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
}