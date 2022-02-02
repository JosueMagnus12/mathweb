const nav = document.querySelector(".header-nav");
const body = document.querySelector("body");
const buttons = [
    document.querySelector(".hamburger"),
    document.querySelector(".exit-btn"),
];
const toggleClass = () => {
    nav.classList.toggle("open");
    body.classList.toggle("hide");
};

buttons.forEach(
    function (button) {
        button.onclick = toggleClass;
    }
);