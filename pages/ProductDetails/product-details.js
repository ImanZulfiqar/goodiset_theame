document.addEventListener("DOMContentLoaded", () => {
    const decrementBtn = document.querySelector(".decrement");
    const incrementBtn = document.querySelector(".increment");
    const quantityInput = document.querySelector("#quantity-input");

    // Handle decrement button
    decrementBtn.addEventListener("click", () => {
        let currentValue = parseInt(quantityInput.value, 10);
        if (currentValue > parseInt(quantityInput.min, 10)) {
            quantityInput.value = currentValue - 1;
        }
    });

    // Handle increment button
    incrementBtn.addEventListener("click", () => {
        let currentValue = parseInt(quantityInput.value, 10);
        quantityInput.value = currentValue + 1;
    });

    // Prevent manual entry of invalid values
    quantityInput.addEventListener("input", () => {
        let value = parseInt(quantityInput.value, 10);
        if (isNaN(value) || value < parseInt(quantityInput.min, 10)) {
            quantityInput.value = quantityInput.min;
        }
    });
});
let preventPropagation = false;

// for tabs

document.querySelectorAll(".tab-item").forEach((tab) => {
    tab.addEventListener("click", function () {
        // Remove active class from all tabs
        document.querySelectorAll(".tab-item").forEach((item) => {
            item.classList.remove("active");
        });

        // Remove active class from all tab panels
        document.querySelectorAll(".tab-panel").forEach((panel) => {
            panel.classList.remove("active");
        });

        // Add active class to clicked tab
        this.classList.add("active");

        // Show corresponding tab panel
        const tabPanelId = this.getAttribute("data-tab");
        document.getElementById(tabPanelId).classList.add("active");
    });

    //for rating
    const stars = document.querySelectorAll(".star");
    const ratingDisplay = document.getElementById("rating");
    let currentRating = 0;

    // Add click functionality
    stars.forEach((star, index) => {
        // Highlight stars on hover
        star.addEventListener("mouseover", () => {
            highlightStars(index + 1);
        });

        // Remove hover effect on mouse leave
        star.addEventListener("mouseout", () => {
            highlightStars(currentRating); // Keep the selected rating
        });

        // Set rating on click
        star.addEventListener("click", () => {
            currentRating = index + 1;
            highlightStars(currentRating); // Apply the rating
            ratingDisplay.textContent = currentRating; // Display the rating value
        });
    });

    // Function to highlight stars
    function highlightStars(count) {
        stars.forEach((star, index) => {
            star.classList.toggle("active", index < count);
        });
    }

    //for input files
    const uploadTrigger = document.getElementById("upload-trigger");
    const fileInput = document.getElementById("file-input");
    const uploadIcon = document.getElementById("upload-icon");
    const previewContainer = document.getElementById("preview-container");

    // Trigger file input when the box is clicked
    uploadTrigger.addEventListener("click", () => {
        fileInput.click();
    });

    // Handle file input change
    fileInput.addEventListener("change", (event) => {
        const files = Array.from(event.target.files); // Get selected files

        // Clear the preview container
        previewContainer.innerHTML = "";

        if (files.length > 0) {
            // Hide the upload icon
            uploadIcon.style.display = "none";

            files.forEach((file) => {
                const fileType = file.type.split("/")[0]; // Determine if it's an image or video

                if (fileType === "image") {
                    // Display image
                    const img = document.createElement("img");
                    img.src = URL.createObjectURL(file); // Generate preview
                    img.alt = file.name;
                    previewContainer.appendChild(img);
                } else if (fileType === "video") {
                    // Display video
                    const video = document.createElement("video");
                    video.src = URL.createObjectURL(file); // Generate preview
                    video.controls = true; // Allow video controls
                    previewContainer.appendChild(video);
                }
            });
        } else {
            // Show the upload icon if no files are uploaded
            uploadIcon.style.display = "block";
        }
    });
});

//for modal
const openModalButton = document.querySelectorAll(".write-review");
// const closeModalButton = document.querySelector(".close");

document
    .querySelector("#review_modal_content")
    .addEventListener("click", () => {
        preventPropagation = true;
    });

openModalButton.forEach((button) => {
    button.addEventListener("click", () => {
        document.querySelector(".modal").style.display = "block";
    });
});
// closeModalButton.addEventListener("click", () => {
//     document.querySelector(".modal").style.display = "none";
// });

document.getElementById("review_modal").addEventListener("click", (event) => {
    if (!preventPropagation) {
        document.querySelector(".modal").style.display = "none";
    }
    preventPropagation = false;
});

const productImages = document.querySelectorAll(".small-image");

productImages.forEach((e) => {
    e.addEventListener("click", () => {
        productImages.forEach((el) => {
            el.style.border = "none";
        });

        const img = e.getAttribute("src");

        e.style.border = "2px solid #e92827";
        document.getElementById("selected_image").setAttribute("src", img);
    });
});
