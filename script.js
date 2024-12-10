const slider = document.querySelector(".slider");
const body = document.getElementsByTagName("body")[0];

function slideLeft() {
    slider.scrollBy({ left: -238, behavior: "smooth" }); // Adjust value based on card width + gap
}

function slideRight() {
    slider.scrollBy({ left: 238, behavior: "smooth" });
}

document
    .querySelector(".mega-dropdown-toggle")
    .addEventListener("mouseover", () => {
        const dropdownMenu = document.querySelector(".mega-dropdown-menu");
        dropdownMenu.style.display = "flex";
        console.log(
            document.getElementsByClassName("mega_menu_arrow")[0],
            "show"
        );
        document.getElementsByClassName("mega_menu_arrow")[0].style.transform =
            "rotate(133deg)";
    });

let categoryTab = "";
const category1 = document.getElementById("first_category");

category1.addEventListener("mouseover", () => {
    categoryTab = "first_category";
    category1.style.backgroundColor = "#FEF2F2";
    category1.style.color = "#FE0C0A";
    category2.style.backgroundColor = "white";
    category2.style.color = "#4A4A4A";
    category3.style.backgroundColor = "white";
    category3.style.color = "#4A4A4A";
    category4.style.backgroundColor = "white";
    category4.style.color = "#4A4A4A";
    category5.style.backgroundColor = "white";
    category5.style.color = "#4A4A4A";
    category6.style.backgroundColor = "white";
    category6.style.color = "#4A4A4A";
    category7.style.backgroundColor = "white";
    category7.style.color = "#4A4A4A";

    document.getElementsByClassName("zero_category")[0].style.display = "none";
    document.getElementsByClassName("flavour_category")[0].style.display =
        "none";
    document.getElementsByClassName("flavour_category2")[0].style.display =
        "none";
    document.getElementsByClassName("first_category")[0].style.display = "flex";
});

const category2 = document.getElementById("second_category");

category2.addEventListener("mouseover", () => {
    categoryTab = "first_category";

    category1.style.backgroundColor = "white";
    category1.style.color = "#4A4A4A";
    category2.style.backgroundColor = "#FEF2F2";
    category2.style.color = "#FE0C0A";
    category3.style.backgroundColor = "white";
    category3.style.color = "#4A4A4A";
    category4.style.backgroundColor = "white";
    category4.style.color = "#4A4A4A";
    category5.style.backgroundColor = "white";
    category5.style.color = "#4A4A4A";
    category6.style.backgroundColor = "white";
    category6.style.color = "#4A4A4A";
    category7.style.backgroundColor = "white";
    category7.style.color = "#4A4A4A";

    document.getElementsByClassName("zero_category")[0].style.display = "none";
    document.getElementsByClassName("flavour_category")[0].style.display =
        "none";
    document.getElementsByClassName("flavour_category2")[0].style.display =
        "none";
    document.getElementsByClassName("first_category")[0].style.display = "flex";
});

const category3 = document.getElementById("third_category");

category3.addEventListener("mouseover", () => {
    categoryTab = "third_category";
    category1.style.backgroundColor = "white";
    category1.style.color = "#4A4A4A";
    category3.style.backgroundColor = "#FEF2F2";
    category3.style.color = "#FE0C0A";
    category2.style.backgroundColor = "white";
    category2.style.color = "#4A4A4A";
    category4.style.backgroundColor = "white";
    category4.style.color = "#4A4A4A";
    category5.style.backgroundColor = "white";
    category5.style.color = "#4A4A4A";
    category6.style.backgroundColor = "white";
    category6.style.color = "#4A4A4A";
    category7.style.backgroundColor = "white";
    category7.style.color = "#4A4A4A";

    document.getElementsByClassName("zero_category")[0].style.display = "none";
    document.getElementsByClassName("flavour_category")[0].style.display =
        "none";
    document.getElementsByClassName("flavour_category2")[0].style.display =
        "none";
    document.getElementsByClassName("first_category")[0].style.display = "flex";
});

const category4 = document.getElementById("forth_category");

category4.addEventListener("mouseover", () => {
    categoryTab = "forth_category";
    category1.style.backgroundColor = "white";
    category1.style.color = "#4A4A4A";
    category4.style.backgroundColor = "#FEF2F2";
    category4.style.color = "#FE0C0A";
    category2.style.backgroundColor = "white";
    category2.style.color = "#4A4A4A";
    category3.style.backgroundColor = "white";
    category3.style.color = "#4A4A4A";
    category5.style.backgroundColor = "white";
    category5.style.color = "#4A4A4A";
    category6.style.backgroundColor = "white";
    category6.style.color = "#4A4A4A";
    category7.style.backgroundColor = "white";
    category7.style.color = "#4A4A4A";

    document.getElementsByClassName("zero_category")[0].style.display = "none";
    document.getElementsByClassName("flavour_category")[0].style.display =
        "none";
    document.getElementsByClassName("flavour_category2")[0].style.display =
        "none";
    document.getElementsByClassName("first_category")[0].style.display = "flex";
});

const category5 = document.getElementById("fifth_category");

category5.addEventListener("mouseover", () => {
    categoryTab = "fifth_category";
    category1.style.backgroundColor = "white";
    category1.style.color = "#4A4A4A";
    category5.style.backgroundColor = "#FEF2F2";
    category5.style.color = "#FE0C0A";
    category2.style.backgroundColor = "white";
    category2.style.color = "#4A4A4A";
    category4.style.backgroundColor = "white";
    category4.style.color = "#4A4A4A";
    category3.style.backgroundColor = "white";
    category3.style.color = "#4A4A4A";
    category6.style.backgroundColor = "white";
    category6.style.color = "#4A4A4A";
    category7.style.backgroundColor = "white";
    category7.style.color = "#4A4A4A";

    document.getElementsByClassName("zero_category")[0].style.display = "none";
    document.getElementsByClassName("flavour_category")[0].style.display =
        "none";
    document.getElementsByClassName("flavour_category2")[0].style.display =
        "none";
    document.getElementsByClassName("first_category")[0].style.display = "flex";
});

const category6 = document.getElementById("sixth_category");

category6.addEventListener("mouseover", () => {
    categoryTab = "sixth_category";
    category1.style.backgroundColor = "white";
    category1.style.color = "#4A4A4A";
    category6.style.backgroundColor = "#FEF2F2";
    category6.style.color = "#FE0C0A";
    category2.style.backgroundColor = "white";
    category2.style.color = "#4A4A4A";
    category4.style.backgroundColor = "white";
    category4.style.color = "#4A4A4A";
    category5.style.backgroundColor = "white";
    category5.style.color = "#4A4A4A";
    category3.style.backgroundColor = "white";
    category3.style.color = "#4A4A4A";
    category7.style.backgroundColor = "white";
    category7.style.color = "#4A4A4A";

    document.getElementsByClassName("zero_category")[0].style.display = "none";
    document.getElementsByClassName("flavour_category")[0].style.display =
        "none";
    document.getElementsByClassName("flavour_category2")[0].style.display =
        "flex";
    document.getElementsByClassName("first_category")[0].style.display = "none";
});

const category7 = document.getElementById("seventh_category");

category7.addEventListener("mouseover", () => {
    categoryTab = "seventh_category";
    category1.style.backgroundColor = "white";
    category1.style.color = "#4A4A4A";
    category7.style.backgroundColor = "#FEF2F2";
    category7.style.color = "#FE0C0A";
    category2.style.backgroundColor = "white";
    category2.style.color = "#4A4A4A";
    category4.style.backgroundColor = "white";
    category4.style.color = "#4A4A4A";
    category5.style.backgroundColor = "white";
    category5.style.color = "#4A4A4A";
    category6.style.backgroundColor = "white";
    category6.style.color = "#4A4A4A";
    category3.style.backgroundColor = "white";
    category3.style.color = "#4A4A4A";

    document.getElementsByClassName("zero_category")[0].style.display = "none";
    document.getElementsByClassName("flavour_category")[0].style.display =
        "flex";
    document.getElementsByClassName("flavour_category2")[0].style.display =
        "none";
    document.getElementsByClassName("first_category")[0].style.display = "none";
});

document.addEventListener("mouseover", (event) => {
    // The ID of the element you want to exclude
    const excludedElementClass = "mega-dropdown-menu";

    // Check if the mouseover target is NOT the excluded element or its children
    if (
        (!event.target.closest(`.${excludedElementClass}`) &&
            !event.target.closest(`.navbar_container`) &&
            !event.target.closest(`.mega-dropdown`)) ||
        ["boxes", "baskets", "celebrations", "pick&mix", "logo"].some((cls) =>
            event.target.classList.contains(cls)
        )
    ) {
        // Trigger your desired functionality here
        document.getElementsByClassName("mega_menu_arrow")[0].style.transform =
            "rotate(-45deg)";

        const dropdownMenu = document.querySelector(".mega-dropdown-menu");
        dropdownMenu.style.display = "none";

        category1.style.backgroundColor = "white";
        category1.style.color = "#4A4A4A";
        category7.style.backgroundColor = "white";
        category7.style.color = "#4A4A4A";
        category2.style.backgroundColor = "white";
        category2.style.color = "#4A4A4A";
        category4.style.backgroundColor = "white";
        category4.style.color = "#4A4A4A";
        category5.style.backgroundColor = "white";
        category5.style.color = "#4A4A4A";
        category6.style.backgroundColor = "white";
        category6.style.color = "#4A4A4A";
        category3.style.backgroundColor = "white";
        category3.style.color = "#4A4A4A";

        document.getElementsByClassName("zero_category")[0].style.display =
            "flex";
        document.getElementsByClassName("flavour_category")[0].style.display =
            "none";
        document.getElementsByClassName("flavour_category2")[0].style.display =
            "none";
        document.getElementsByClassName("first_category")[0].style.display =
            "none";
    }
});

document
    .getElementsByClassName("menu_icon")[0]
    .addEventListener("click", () => {
        document.getElementById("mbl_nav_container").style.display = "block";

        document.getElementsByTagName("body")[0].style.overflowY = "hidden";
    });

document.getElementById("close_mbl_menu").addEventListener("click", () => {
    document.getElementById("mbl_nav_container").style.display = "none";
    document.getElementsByTagName("body")[0].style.overflowY = "unset";
});

document
    .getElementsByClassName("mbl_shop_toggle")[0]
    .addEventListener("click", () => {
        console.log(
            document.getElementsByClassName("mbl_dropdown")[0].style.display
        );
        document.getElementsByClassName("mbl_dropdown")[0].style.display =
            document.getElementsByClassName("mbl_dropdown")[0].style.display ===
            "block"
                ? "none"
                : "block";
    });

document.getElementById("open_search").addEventListener("click", () => {
    document.getElementsByClassName("search_bar_overlay")[0].style.display =
        "flex";

    body.classList.add("stop_scroll");
});
document.addEventListener("click", (event) => {
    if (event.target.classList.contains("search_bar_overlay")) {
        document.getElementsByClassName("search_bar_overlay")[0].style.display =
            "none";
        body.classList.remove("stop_scroll");
    }
});

document
    .getElementsByClassName("close_annoucement_btn")[0]
    .addEventListener("click", () => {
        document.getElementsByClassName("announcement-bar")[0].style.display =
            "none";
    });

const images = document.querySelectorAll(".slider_image");
let currentIndex = 0;

function showNextImage() {
    // Hide current image
    if (images[currentIndex]) images[currentIndex].classList.remove("active");

    // Calculate next image index
    currentIndex = (currentIndex + 1) % images.length;

    // Show next image
    if (images[currentIndex]) images[currentIndex].classList.add("active");
}

// Change image every 3 seconds

setInterval(showNextImage, 3000);
