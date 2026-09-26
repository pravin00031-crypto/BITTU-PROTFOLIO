emailjs.init({
    publicKey: "xdFmOiG1Lrf03beqt"
});

const contactForm = document.getElementById("contact-form");

if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const button = contactForm.querySelector("button[type='submit']");

        button.textContent = "Sending...";
        button.disabled = true;

        emailjs.sendForm(
            "service_gw58dre",
            "template_9e9oycg",
            contactForm
        )
        .then(function () {
            const status = document.getElementById("form-status");

status.textContent = " Message sent successfully 🎉 ";
status.style.color = "green";
status.style.fontWeight = "bold";

contactForm.reset();

            button.textContent = "Send Message";
            button.disabled = false;
        })
        .catch(function (error) {
            console.error("EmailJS Error:", error);

            alert("Message could not be sent. Please try again.");

            button.textContent = "Send Message";
            button.disabled = false;
        });
    });
}