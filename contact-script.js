
document.getElementById('contact-form').addEventListener('submit', async function(event) {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);

    try {
        const response = await fetch('https://formsubmit.co/ajax/smismail477@gmail.com', {
            method: 'POST',
            body: formData,
        });

        if (response.ok) {
            window.location.href = 'successfully-submitted.html';
        } else {
            alert('There was an error submitting your form. Please try again.');
        }
    } catch (error) {
        alert('There was an error submitting your form. Please try again.');
    }
});