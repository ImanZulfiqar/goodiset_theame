document.addEventListener("DOMContentLoaded", () => {
    const accordionItems = document.querySelectorAll(".accordion-item");
  
    accordionItems.forEach((item, index) => {
      const header = item.querySelector(".accordion-header");
      const content = item.querySelector(".accordion-content");
      const icon = item.querySelector(".toggle-icon");
  
      // Open the first item by default
      if (index === 0) {
        header.classList.add("active");
        content.classList.add("expanded");
        icon.textContent = "-";
      }
  
      header.addEventListener("click", () => {
        const isOpen = header.classList.contains("active");
  
        if (isOpen) {
          // Close the current item
          header.classList.remove("active");
          content.classList.remove("expanded");
          icon.textContent = "+";
        } else {
          // Close all other items
          accordionItems.forEach((otherItem) => {
            const otherHeader = otherItem.querySelector(".accordion-header");
            const otherContent = otherItem.querySelector(".accordion-content");
            const otherIcon = otherItem.querySelector(".toggle-icon");
  
            otherHeader.classList.remove("active");
            otherContent.classList.remove("expanded");
            otherIcon.textContent = "+";
          });
  
          // Open the clicked item
          header.classList.add("active");
          content.classList.add("expanded");
          icon.textContent = "-";
        }
      });
    });
  });
  