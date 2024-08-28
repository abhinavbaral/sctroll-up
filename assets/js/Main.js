document.addEventListener('DOMContentLoaded', function() {
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');
    
    // Show or hide the button depending on the scroll position
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) { // Show button after scrolling 300px
            scrollToTopBtn.classList.remove('hidden');
        } else {
            scrollToTopBtn.classList.add('hidden');
        }
    });

    // Smooth scroll to the top when the button is clicked
    scrollToTopBtn.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent default anchor behavior
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});