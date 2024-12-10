document.addEventListener("DOMContentLoaded", () => {
    const sliders = document.querySelectorAll(".slider");
  
    sliders.forEach((slider) => {
      const sliderWrapper = slider.querySelector(".slider-wrapper");
      const dots = slider.querySelectorAll(".dot");
      const totalSlides = dots.length;
      let currentIndex = 0;
      let startX = 0;
      let endX = 0;
  
      // Function to update the slider position
      function updateSlider(index) {
        sliderWrapper.style.transform = `translateX(-${index * 100}%)`;
        dots.forEach((dot, i) => {
          dot.classList.toggle("active", i === index);
        });
      }
  
      // Dot navigation
      dots.forEach((dot, index) => {
        dot.addEventListener("click", () => {
          currentIndex = index;
          updateSlider(currentIndex);
        });
      });
  
      // Touch events
      sliderWrapper.addEventListener("touchstart", (e) => {
        startX = e.touches[0].clientX;
      });
  
      sliderWrapper.addEventListener("touchend", (e) => {
        endX = e.changedTouches[0].clientX;
        handleSwipe();
      });
  
      // Handle swipe
      function handleSwipe() {
        if (startX - endX > 50) {
          // Swipe left
          currentIndex = (currentIndex + 1) % totalSlides;
        } else if (endX - startX > 50) {
          // Swipe right
          currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        }
        updateSlider(currentIndex);
      }

      // Auto slide
      setInterval(() => {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateSlider(currentIndex);
      }, 5000);
  
    });
  });
  