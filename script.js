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



