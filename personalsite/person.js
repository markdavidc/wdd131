// Get elements
const contactForm = document.getElementById('contactForm');
const confirmationMessage = document.getElementById('confirmationMessage');

// Add event listener for form submission
contactForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way
    
    // Show confirmation message
    confirmationMessage.style.display = 'block';

    // Hide the confirmation message after 5 seconds
    setTimeout(function() {
        confirmationMessage.style.display = 'none';
    }, 5000);

    // Clear the form fields after submission
    contactForm.reset();
});

function calculateSnowfall() {
    // Get input values
    const temperature = parseFloat(document.getElementById('temperature').value);
    const humidity = parseFloat(document.getElementById('humidity').value);
    const altitude = parseFloat(document.getElementById('altitude').value);
  
    // Simple formula to estimate snowfall (for demonstration)
    // Lower temperature, higher humidity, and higher altitude = more snow
    let snowfall = (humidity / 100) * (0.5 * (0 - temperature)) + (altitude / 1000) * 10;
  
    // Ensure snowfall is not negative
    if (snowfall < 0) {
      snowfall = 0;
    }
  
    // Display the result
    document.getElementById('snowfall-result').innerText = `Estimated Snowfall: ${snowfall.toFixed(2)} cm`;
  }