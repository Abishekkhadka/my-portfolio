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

// Project Modal functionality
const modal = document.getElementById('project-modal');
const closeModalBtn = document.getElementById('close-modal-btn');
const viewProjectBtns = document.querySelectorAll('.view-project-btn');
const modalTitle = document.getElementById('modal-title');
const projectDocumentFrame = document.getElementById('project-document');
const projectGithubLink = document.getElementById('project-github-link');

viewProjectBtns.forEach(button => {
    button.addEventListener('click', function() {
        // Retrieve the data attributes from the clicked button
        const projectTitle = this.closest('.p-6').querySelector('h3').textContent;
        const githubUrl = this.getAttribute('data-github-url');
        const documentUrl = this.getAttribute('data-document-url');

        // Set the modal content dynamically based on the data attributes
        modalTitle.textContent = projectTitle;
        projectDocumentFrame.src = documentUrl || 'https://placehold.co/1200x800/f3f4f6/1f2937?text=No+Document+Available';
        projectGithubLink.href = githubUrl || '#';

        // Show the modal
        modal.classList.remove('hidden');
    });
});

closeModalBtn.addEventListener('click', function() {
    modal.classList.add('hidden');
});

// Close modal when clicking outside of it
modal.addEventListener('click', function(e) {
    if (e.target === modal) {
        modal.classList.add('hidden');
    }
});
