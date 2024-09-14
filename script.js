// script.js
document.addEventListener("DOMContentLoaded", function() {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".pages li a");

  function changeActiveLink() {
      let currentSection = "";

      // Find the section that's currently in view
      sections.forEach(section => {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.clientHeight;

          if (pageYOffset >= sectionTop - sectionHeight / 3) {
              currentSection = section.getAttribute("id");
          }
      });

      // Remove 'active' class from all links and add it to the current one
      navLinks.forEach(link => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${currentSection}`) {
              link.classList.add("active");
          }
      });
  }

  window.addEventListener("scroll", changeActiveLink);
});
