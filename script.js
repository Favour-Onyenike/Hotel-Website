// Mobile Menu Toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
            navLinks.classList.remove('active');
        }
    });
}
//loader


    // Hide loader when page is fully loaded
    window.addEventListener('load', function () {
        document.getElementById('loader').style.display = 'none';
        document.body.classList.add('loaded'); // Optional: Add a class to body
    });


// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
            // Close mobile menu after clicking a link
            if (navLinks) {
                navLinks.classList.remove('active');
            }
        }
    });
});

// Navbar background change on scroll
const navbar = document.querySelector('.navbar');
if (navbar) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        } else {
            navbar.style.background = 'white';
        }
    });
}

//gallery images to open up
document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");
    const closeBtn = document.querySelector(".close");

    document.querySelectorAll(".gallery-item img").forEach(img => {
        img.addEventListener("click", function () {
            modal.style.display = "block";
            modalImg.src = this.src;
        });
    });

    // Close modal when clicking on the close button
    closeBtn.addEventListener("click", function () {
        modal.style.display = "none";
    });

    // Close modal when clicking outside the image
    modal.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});


//fly in


    document.addEventListener("DOMContentLoaded", function () {
        const sections = document.querySelectorAll("section");

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        sections.forEach(section => {
            section.classList.add("hidden");
            observer.observe(section);
        });
    });

    //email
    document.addEventListener("DOMContentLoaded", function () {
        emailjs.init("N81FOQih4FIfB5U5l"); // Initialize EmailJS with your Public Key
    
        document.getElementById("contactForm").addEventListener("submit", function (event) {
            event.preventDefault(); // Prevent default form submission
    
            // Show loading text
            let submitButton = document.querySelector(".submit-button");
            submitButton.textContent = "Sending...";
    
            emailjs.sendForm("service_oy57ceq", "template_o78pr8b", this)
                .then(
                    function () {
                        document.getElementById("successMessage").style.display = "block";
                        document.getElementById("errorMessage").style.display = "none";
                        submitButton.textContent = "Send Message";
                        document.getElementById("contactForm").reset(); // Clear the form
                    },
                    function (error) {
                        console.log("FAILED...", error);
                        document.getElementById("successMessage").style.display = "none";
                        document.getElementById("errorMessage").style.display = "block";
                        submitButton.textContent = "Send Message";
                    }
                );
        });
    });
    


