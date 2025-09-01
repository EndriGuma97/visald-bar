document.addEventListener("DOMContentLoaded", () => {
  const navButtons = document.querySelectorAll(".nav-button");
  const menuSections = document.querySelectorAll(".menu-section");

  function filterMenu(category) {
    // Remove active class from all buttons
    navButtons.forEach((button) => button.classList.remove("active"));

    // Add active class to the clicked button
    const activeButton = document.querySelector(
      `.nav-button[data-category="${category}"]`
    );
    if (activeButton) {
      activeButton.classList.add("active");
    }

    menuSections.forEach((section) => {
      if (category === "all" || section.dataset.category === category) {
        section.classList.remove("hidden");
        // You can add a more sophisticated animation here if needed
        section.style.display = "block"; // Ensure it's visible
      } else {
        section.classList.add("hidden");
        section.style.display = "none"; // Hide it properly
      }
    });
  }

  navButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const category = button.dataset.category;
      filterMenu(category);
    });
  });

  // Initialize the menu to show all items by default
  filterMenu("all");
});
