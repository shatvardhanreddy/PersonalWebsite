


document.addEventListener("DOMContentLoaded", function () {
    const scrollToContactButton = document.getElementById("scrollToContact");
    const contactSection = document.getElementById("contact-loc");
  
    // Check if the button and contact section exist
    if (scrollToContactButton && contactSection) {
      scrollToContactButton.addEventListener("click", function () {
        // Scroll to the contact section smoothly
        contactSection.scrollIntoView({ behavior: "smooth" });
      });
    }
  });
  