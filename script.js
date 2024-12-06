// Initialize EmailJS with your public key
emailjs.init('lseBindrlzcz4y5Kz'); // Use your public key here

// Add an event listener to handle form submission
document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent default form submission behavior

    // Use EmailJS to send the form data
    emailjs.sendForm('service_c3jojtr', 'template_8z6whgo', this)
        .then(function () {
            alert('Message sent successfully!');
        }, function (error) {
            console.error('Failed to send message:', error);
            alert('Failed to send message. Please try again.');
        });
});
