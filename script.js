// script.js
document.addEventListener("DOMContentLoaded", function() {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".pages li a");
  const scrollToTopButton = document.getElementById("scrollToTop");

  // Smooth scroll functionality for navigation links
  navLinks.forEach(link => {
      link.addEventListener("click", function(e) {
          e.preventDefault();
          const targetId = this.getAttribute("href").substring(1);
          const targetSection = document.getElementById(targetId);
          targetSection.scrollIntoView({
              behavior: "smooth",
              block: "start"
          });
      });
  });

  // Change active link on scroll
  function changeActiveLink() {
      let currentSection = "";

      sections.forEach(section => {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.clientHeight;

          if (pageYOffset >= sectionTop - sectionHeight / 3) {
              currentSection = section.getAttribute("id");
          }
      });

      navLinks.forEach(link => {
          link.classList.remove("active");
          if (link.getAttribute("href").substring(1) === currentSection) {
              link.classList.add("active");
          }
      });

      // Show or hide the scroll-to-top button
      if (pageYOffset > 500) {
          scrollToTopButton.style.display = "flex";
      } else {
          scrollToTopButton.style.display = "none";
      }
  }

  window.addEventListener("scroll", changeActiveLink);

  // Scroll to top on button click
  scrollToTopButton.addEventListener("click", function() {
      window.scrollTo({
          top: 0,
          behavior: "smooth"
      });
  });
});



// Function to show the sidebar
function showSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex'; // Display the sidebar
    setTimeout(() => { // Allow the display change before triggering animation
        sidebar.style.right = '8px'; // Slide it into view
    }, 10); // Slight delay to trigger transition after display change
}

// Function to hide the sidebar
function hideSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.right = '-300px'; // Slide it out of view
    setTimeout(() => {
        sidebar.style.display = 'none'; // After sliding out, hide the sidebar
    }, 300); // Wait for the slide-out animation to complete
}

// Close sidebar when clicking an anchor inside the sidebar
document.querySelectorAll('.sidebar a').forEach(anchor => {
    anchor.addEventListener('click', hideSidebar);
});


// Close sidebar when clicking outside
document.addEventListener('click', (event) => {
    const sidebar = document.querySelector('.sidebar');
    const showSidebarButton = document.querySelector('.showsidebar');
    if (!sidebar.contains(event.target) && !showSidebarButton.contains(event.target)) {
        hideSidebar();
    }
});
