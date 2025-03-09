// Smooth Scroll for Navigation Links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const sectionId = this.getAttribute('href').substring(1);
        document.getElementById(sectionId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Simple Form Validation
document.querySelector("form").addEventListener("submit", function(e) {
    let name = document.querySelector("input[name='name']").value;
    let email = document.querySelector("input[name='email']").value;
    let message = document.querySelector("textarea[name='message']").value;

    if (name === "" || email === "" || message === "") {
        e.preventDefault();
        alert("Please fill in all fields before submitting.");
    }
});

 // donate animation
function giveBread() {
    let bread = document.getElementById("bread");
    let message = document.getElementById("thank-you-msg");

    // Reset the bread position
    bread.style.opacity = "1";
    bread.style.transition = "transform 1s ease-in-out, opacity 0.5s";
    bread.style.transform = "translateY(80px)";

    // Hide bread and show message after animation
    setTimeout(() => {
        bread.style.opacity = "0";
        message.innerHTML = "Thank you for your donation! ❤️";
        message.style.display = "block";
    }, 1000);
}
