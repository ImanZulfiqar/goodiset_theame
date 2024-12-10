// for filtration dropdown

const dropdowns = document.querySelectorAll(".filter_dropdown");
const selectedValues = {}; // Object to store selected values for each dropdown

dropdowns.forEach((dropdown) => {
    const button = dropdown.querySelector(".filter_dropdown-btn");
    const menu = dropdown.querySelector(".filter_dropdown-menu");
    const items = dropdown.querySelectorAll(".filter_dropdown-item");
    const dropdownKey = dropdown.dataset.dropdown;

    // Toggle dropdown menu
    button.addEventListener("click", () => {
        button.scrollIntoView({ behavior: "smooth", block: "center" });

        // Use a slight delay to ensure scrolling completes before calculating the position
        setTimeout(() => {
            const position = button.getBoundingClientRect();
            menu.style.display =
                menu.style.display === "block" ? "none" : "block";

            menu.style.left = `${position.left + window.scrollX}px`;
            menu.style.top = `${
                position.top + window.scrollY + position.height
            }px`;
        }, 300);
    });

    // Handle item selection
    items.forEach((item) => {
        item.addEventListener("click", (e) => {
            items.forEach((i) => i.classList.remove("selected"));

            e.target.classList.add("selected");

            selectedValues[dropdownKey] = e.target.dataset.id;
            button.innerHTML = `<p> ${e.target.innerHTML} </p>`;
            menu.style.display = "none";
        });
    });

    // Close dropdown when clicking outside
    document.addEventListener("click", (e) => {
        if (!dropdown.contains(e.target)) {
            menu.style.display = "none";
        }
    });
});

//  filtration dropdown end

// document
//     .getElementsByClassName("clear_filters")[0]
//     .addEventListener("click", () => {
//         const dropdowns = document.querySelectorAll(".selected");

//         dropdowns.forEach((dropdown) => {
//             dropdown.classList.remove("selected");
//         });
//     });
const slider2 = document.querySelectorAll(".product_slider");
slider2.forEach((slide) => {
    slide.addEventListener("mouseover", () => {
        const slider_images = slide.querySelectorAll(".product_slider_image");
        console.log(slider_images, "slidee");
        slider_images[0].classList.remove("active");
        slider_images[1].classList.add("active");
    });

    slide.addEventListener("mouseout", () => {
        const slider_images = slide.querySelectorAll(".product_slider_image");

        slider_images[1].classList.remove("active");
        slider_images[0].classList.add("active");
    });
});
