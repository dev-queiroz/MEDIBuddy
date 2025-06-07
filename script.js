// Menu toggle mobile
const navToggle = document.getElementById("navToggle");
const navList = document.getElementById("navList");

navToggle.addEventListener("click", () => {
    navList.classList.toggle("active");
});

// Close menu on link click (mobile)
document.querySelectorAll(".nav__link").forEach((link) =>
    link.addEventListener("click", () => {
        navList.classList.remove("active");
    })
);

// Scroll suave para serviços
const btnServicesScroll = document.getElementById("btnServicesScroll");
btnServicesScroll.addEventListener("click", () => {
    document.getElementById("services").scrollIntoView({behavior: "smooth"});
});

// Modal de registro
const btnRegisters = [
    document.getElementById("btnRegister"),
    document.getElementById("btnRegister2"),
    document.getElementById("btnRegister3"),
];

const modalRegister = document.getElementById("modalRegister");
const btnModalClose = document.getElementById("btnModalClose");

btnRegisters.forEach((btn) =>
    btn.addEventListener("click", () => {
        modalRegister.classList.add("active");
        modalRegister.setAttribute("aria-hidden", "false");
        document.body.style.overflow = "hidden";
    })
);

btnModalClose.addEventListener("click", closeModal);
modalRegister.querySelector(".modal__overlay").addEventListener("click", closeModal);

function closeModal() {
    modalRegister.classList.remove("active");
    modalRegister.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
}

// Form Validation Helpers
function validateInput(input) {
    const errorMessage = input.nextElementSibling;
    if (!input.checkValidity()) {
        if (input.validity.valueMissing) {
            errorMessage.textContent = "Campo obrigatório";
        } else if (input.type === "email" && input.validity.typeMismatch) {
            errorMessage.textContent = "Email inválido";
        } else {
            errorMessage.textContent = "Valor inválido";
        }
        return false;
    } else {
        errorMessage.textContent = "";
        return true;
    }
}

// Contact Form Validation & Submission (fake)
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const inputs = contactForm.querySelectorAll("input, textarea");
    let valid = true;

    inputs.forEach((input) => {
        if (!validateInput(input)) valid = false;
    });

    if (valid) {
        alert("Mensagem enviada com sucesso!");
        contactForm.reset();
    }
});

// Register Form Validation & Submission (fake)
const registerForm = document.getElementById("registerForm");

registerForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const inputs = registerForm.querySelectorAll("input, select");
    let valid = true;

    inputs.forEach((input) => {
        if (!validateInput(input)) valid = false;
    });

    if (valid) {
        alert("Registro enviado com sucesso!");
        registerForm.reset();
        closeModal();
    }
});