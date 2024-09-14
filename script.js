// Get all anchor links inside '.pages li a'
const links = document.querySelectorAll('.pages li a');

// Add event listener to each anchor
links.forEach(link => {
  link.addEventListener('click', function(event) {
    // Prevent default anchor behavior
    event.preventDefault();

    // Remove 'active' class from all links
    links.forEach(l => l.classList.remove('active'));

    // Add 'active' class to the clicked link
    this.classList.add('active');

    // Scroll to the section related to this anchor
    const section = document.querySelector(this.getAttribute('href'));
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth', // Smooth scrolling
        block: 'start',     // Align to the top of the section
        inline: 'nearest'
      });
    }
  });
});




