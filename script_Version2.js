// Smooth scroll to section
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// Contact form submission
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('contactForm');
    const message = document.getElementById('formMessage');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        // Simple form validation
        if (
            !form.name.value.trim() ||
            !form.email.value.trim() ||
            !form.address.value.trim() ||
            !form.message.value.trim()
        ) {
            message.style.color = '#e74c3c';
            message.textContent = "Please fill in all fields.";
            return;
        }
        // Simulate sending message
        message.style.color = '#00b894';
        message.textContent = "Thank you! We'll contact you soon.";
        form.reset();
        setTimeout(() => { message.textContent = ""; }, 4000);
    });
});