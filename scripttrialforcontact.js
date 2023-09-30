document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contactForm");
    const responseDiv = document.getElementById("response");

    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        if (!name || !email || !message) {
            responseDiv.textContent = "Please fill out all required fields.";
            return;
        }

        // Elastic Email API settings
        const apiKey = 'EE79D53A70B71CECF7209CF050E435C6A7D56DEA4B08B424FEAD4573B969F0BEDAD5E4286FF0E36B4DE457207880BB0E';
        const apiEndpoint = 'https://api.elasticemail.com/v2/email/send';

        // Email data
        const emailData = {
            apiKey: apiKey,
            to: 'abhirampsiog1@gmail.com' , // Replace with your recipient's email
            from: email,
            subject: 'Contact Form Submission',
            bodyText: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
        };

        // Send the email
        fetch(apiEndpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(emailData),
        })
            .then((response) => {
                if (response.ok) {
                    responseDiv.textContent = 'Email sent successfully';
                    contactForm.reset(); // Reset the form
                } else {
                    console.error('Error sending email:', response.statusText);
                    responseDiv.textContent = 'Oops! Something went wrong and we couldn\'t send your message.';
                }
            })
            .catch((error) => {
                console.error('Network error:', error);
                responseDiv.textContent = 'Oops! Something went wrong and we couldn\'t send your message.';
            });
    });
});
