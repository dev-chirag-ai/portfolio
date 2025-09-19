document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form from submitting the traditional way
  
  // Get form values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  
  if (name && email && message) {
    alert(`Thank you, ${name}! Your message has been sent.`);
    // Here you can integrate with an email API or your server to send the form data.
    
    // Clear form
    document.getElementById('contact-form').reset();
  } else {
    alert('Please fill in all fields before submitting.');
  }
});
