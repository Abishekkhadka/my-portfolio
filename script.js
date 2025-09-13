// Toggle mobile menu visibility  
document.getElementById('mobile-menu-btn').addEventListener('click', function() {  
    const mobileMenu = document.getElementById('mobile-menu');  
    mobileMenu.classList.toggle('hidden');  
});  

// Highlight active section in the navbar  
document.addEventListener('DOMContentLoaded', function() {  
    const sections = document.querySelectorAll('.section, #hero');  
    const navLinks = document.querySelectorAll('.nav-link');  
    const mobileMenu = document.getElementById('mobile-menu');

    // Close mobile menu when a link inside it is clicked
    mobileMenu.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
    });

    const observerOptions = {  
        root: null,  
        rootMargin: '0px',  
        threshold: 0.5  
    };  

    const observer = new IntersectionObserver((entries, observer) => {  
        entries.forEach(entry => {  
            if (entry.isIntersecting) {  
                // Remove active class from all nav links  
                navLinks.forEach(link => {  
                    link.classList.remove('active-link');  
                });  

                // Add active class to the current section's nav link  
                const currentSectionId = entry.target.id;  
                const correspondingLink = document.querySelector(`[href="#${currentSectionId}"]`);  
                if (correspondingLink) {  
                    correspondingLink.classList.add('active-link');  
                }  
            }  
        });  
    }, observerOptions);  

    sections.forEach(section => {  
        observer.observe(section);  
    });  
});
