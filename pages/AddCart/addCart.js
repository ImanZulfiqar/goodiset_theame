document.addEventListener("DOMContentLoaded", () => {
    const steps = document.querySelectorAll(".step");
    const step_label = document.querySelectorAll(".step_label");
    const active_step_label = document.querySelectorAll(".active_step_label");

    const contents = document.querySelectorAll(".content");
    // const prevBtn = document.getElementById("prev-step");
    const nextBtn = document.getElementById("next-step");
    let currentStep = 1;

    const updateStepper = () => {
        steps.forEach((step, index) => {
            const stepNumber = index + 1;
            if (stepNumber < currentStep) {
                step.classList.add("completed");
                step.classList.remove("active");
            } else if (stepNumber === currentStep) {
                step.classList.add("active");
                step.classList.remove("completed");
            } else {
                step.classList.remove("active", "completed");
            }
        });

        contents.forEach((content) => {
            content.style.display =
                Number(content.dataset.step) === currentStep ? "block" : "none";
        });
        step_label.forEach((content) => {
            content.style.display =
                Number(content.dataset.step) === currentStep ? "block" : "none";
        });
        active_step_label.forEach((content) => {
            content.style.display =
                Number(content.dataset.step) === currentStep ? "block" : "none";
        });

        //   prevBtn.disabled = currentStep === 1;
        nextBtn.disabled = currentStep === steps.length;
    };

    // prevBtn.addEventListener("click", () => {
    //   if (currentStep > 1) {
    //     currentStep--;
    //     updateStepper();
    //   }
    // });

    nextBtn.addEventListener("click", () => {
        if (currentStep < steps.length) {
            currentStep++;
            updateStepper();
        }
    });
    document.getElementById("next_btn").addEventListener("click", () => {
        if (currentStep < steps.length) {
            currentStep++;
            updateStepper();
        }
    });
    document.getElementById("next_compelete").addEventListener("click", () => {
        if (currentStep < steps.length) {
            currentStep++;
            updateStepper();
        }
    });

    updateStepper();
});

document.addEventListener("DOMContentLoaded", () => {
    const minusBtn = document.getElementById("minus");
    const plusBtn = document.getElementById("plus");
    const quantityDisplay = document.getElementById("quantity");
    let quantity = parseInt(quantityDisplay.innerHTML);

    // let quantity = 1;

    minusBtn.addEventListener("click", () => {
        if (quantity > 1) {
            quantity--;
            quantityDisplay.textContent = quantity;
        }
    });

    plusBtn.addEventListener("click", () => {
        quantity++;
        quantityDisplay.textContent = quantity;
    });
});
