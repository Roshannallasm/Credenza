document.addEventListener('DOMContentLoaded', (event) => {
    // Function to handle "Let's Talk" button click event
    function handleLetsTalkClick() {
        // Get the email input value
        const emailInput = document.querySelector('.cta input[type="email"]');
        const email = emailInput.value;

        // Check if the email is not empty
        if (email) {
            alert(`Thank you! We will contact you at ${email} soon.`);
        } else {
            alert('Please enter a valid email address.');
        }
    }

    // Attach event listener to the "Let's Talk" button
    const letsTalkButton = document.querySelector('.cta button');
    letsTalkButton.addEventListener('click', handleLetsTalkClick);
});

let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }

    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 5000); // Change image every 5 seconds
}

function currentSlide(n) {
    slideIndex = n;
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}
