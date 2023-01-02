/* ========================== toggle style switcher =========================== */
// init
if (localStorage.getItem("themeColor") === null) {
    localStorage.setItem("themeColor", "color-1");
}

const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
});
// hide style - switcher on scroll
window.addEventListener("scroll", () => {
    if (document.querySelector(".style-switcher").classList.contains("open")) {
        document.querySelector(".style-switcher").classList.remove("open");
    }
});
/* ========================== theme colors =========================== */
const alternateStyles = document.querySelectorAll(".alternate-style");
const themeColor = localStorage.getItem("themeColor");
setActiveStyle(themeColor);

function setActiveStyle(color) {
    alternateStyles.forEach((style) => {
        if (color === style.getAttribute("title")) {
            style.removeAttribute("disabled");
            localStorage.setItem("themeColor", color);
            return;
        } else {
            style.setAttribute("disabled", "true");
        }
    });
}

/* ========================== theme light and dark mode =========================== */
const dayNight = document.querySelector(".day-night");
// init
if (localStorage.getItem("lightMode") === null) {
    localStorage.setItem("lightMode", "true");
}

const lightMode = localStorage.getItem("lightMode");
if (lightMode === "true") {
    dayNight.querySelector("i").classList.toggle("fa-sun");
    document.body.classList.toggle("light");
} else {
    // dark mode
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
}

dayNight.addEventListener("click", (e) => {
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
    // console.log(e.target);
    if (lightMode === "true") {
        localStorage.setItem("lightMode", "false");
    } else {
        localStorage.setItem("lightMode", "true");
    }
});

window.addEventListener("load", () => {
    if (document.body.classList.contains("dark")) {
        dayNight.querySelector("i").classList.add("fa-moon");
    } else {
        dayNight.querySelector("i").classList.add("fa-sun");
    }
});