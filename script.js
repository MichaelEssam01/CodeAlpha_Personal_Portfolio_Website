// Get the hamburger icon and menu elements
const hamburgerIcon = document.getElementById('hamburger-icon');
const navbar = document.getElementById('navbar');

// Event listener for hamburger icon click
hamburgerIcon.addEventListener('click', function() {
    navbar.classList.toggle('active');
});


// Function to show thank you message and reset form
function showThankYou(event) {
    event.preventDefault(); 

    // Show thank you message
    const thankYouMessage = document.getElementById('thank-you');
    thankYouMessage.classList.remove('hidden');

    // Reset form fields
    const form = document.querySelector('form');
    form.reset();

    // Hide thank you message after 3 seconds
    setTimeout(() => {
        thankYouMessage.classList.add('hidden');
    }, 3000);
}


// Event listener for form submission
document.querySelector('form').addEventListener('submit', showThankYou);

