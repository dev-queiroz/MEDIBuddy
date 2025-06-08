// ==================== MENU MOBILE ====================
const navToggle = document.getElementById("navToggle");
const navList = document.getElementById("navList");

navToggle.addEventListener("click", () => {
    navList.classList.toggle("active");
});

document.querySelectorAll(".nav__link").forEach((link) =>
    link.addEventListener("click", () => {
        navList.classList.remove("active");
    })
);

// ==================== SCROLL SUAVE ====================
const btnServicesScroll = document.getElementById("btnServicesScroll");
btnServicesScroll?.addEventListener("click", () => {
    document.getElementById("services").scrollIntoView({behavior: "smooth"});
});

// ==================== MODAL DE REGISTRO ====================
const btnRegisters = [
    document.getElementById("btnRegister"),
    document.getElementById("btnRegister2"),
    document.getElementById("btnRegister3"),
];

const modalRegister = document.getElementById("modalRegister");
const btnModalClose = document.getElementById("btnModalClose");
const modalOverlay = modalRegister.querySelector(".modal__overlay");

btnRegisters.forEach((btn) => btn?.addEventListener("click", () => openModal()));

btnModalClose.addEventListener("click", closeModal);
modalOverlay.addEventListener("click", closeModal);

function openModal() {
    modalRegister.classList.add("active");
    modalRegister.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    modalRegister.querySelector("input")?.focus();
}

function closeModal() {
    modalRegister.classList.remove("active");
    modalRegister.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
}

// Escape key to close modal
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modalRegister.classList.contains("active")) {
        closeModal();
    }
});

// ==================== FORM VALIDATION ====================
function validateInput(input) {
    const errorMessage = input.nextElementSibling;
    if (!input.checkValidity()) {
        if (input.validity.valueMissing) {
            errorMessage.textContent = "This field is required.";
        } else if (input.type === "email" && input.validity.typeMismatch) {
            errorMessage.textContent = "Invalid email address.";
        } else {
            errorMessage.textContent = "Invalid input.";
        }
        return false;
    } else {
        errorMessage.textContent = "";
        return true;
    }
}

// ==================== CONTACT FORM ====================
const contactForm = document.getElementById("contactForm");

contactForm?.addEventListener("submit", (e) => {
    e.preventDefault();
    const inputs = contactForm.querySelectorAll("input, textarea");
    let valid = true;

    inputs.forEach((input) => {
        if (!validateInput(input)) valid = false;
    });

    if (valid) {
        alert("Your message has been successfully sent!");
        contactForm.reset();
    }
});

// ==================== REGISTER FORM ====================
const registerForm = document.getElementById("registerForm");

registerForm?.addEventListener("submit", (e) => {
    e.preventDefault();
    const inputs = registerForm.querySelectorAll("input, select");
    let valid = true;

    inputs.forEach((input) => {
        if (!validateInput(input)) valid = false;
    });

    if (valid) {
        alert("Registration submitted successfully!");
        registerForm.reset();
        closeModal();
    }
});

// ==================== OPTIONAL: SCROLLREVEAL INIT ====================
ScrollReveal().reveal(".section-title, .hero__content, .service-card", {
    origin: "bottom",
    distance: "40px",
    duration: 800,
    interval: 100,
    reset: false,
});
