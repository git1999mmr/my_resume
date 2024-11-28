// Wait until the page content is fully loaded
window.addEventListener('load', function() {
    const elements = document.querySelectorAll('.fade-in, .slide-in');
    
    // Trigger the animation on page load
    elements.forEach(function(el, index) {
        setTimeout(function() {
            el.classList.add('fade-in-visible');
        }, index * 200); // Stagger the animation slightly for effect
    });
});
