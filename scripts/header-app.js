const headerContainer = document.querySelector(".header-wrap");
headerContainer.innerHTML = `<header class="page-header">
<div class="container">
<button type="button" class="menu-btn">
<i class="fas fa-bars"></i>
</button>

<a href="index.html" class="home-link">
<img src="./images/math-web-logo.svg" alt="Web Math Logo" width="400" height="300" class="logo-img"/>
</a>

<nav class="header-nav">
<header class="nav-top">
<div class="nav-top-wrap">
<button type="button" class="exit-btn">
<i class="fas fa-times"></i>
</button>
<img src="./images/math-web-logo.svg" alt="MathWeb logo" width="400px" height="300px"
class="nav-top-logo">
</div>
</header>

<a href="index.html" class="link">Home</a>
<a href="shapes.html" class="link">Geometry</a>
<a href="discounts.html" class="link">Proportions</a>
<a href="statistics.html" class="link">Statistics</a>
<a href="analytics.html" class="link">Analytics</a>
</nav>

</div>
</header>`;

const body = document.querySelector("body");
const buttons = [
    document.querySelector(".menu-btn"),
    document.querySelector(".exit-btn"),
];
const menu = document.querySelector(".header-nav");
const toggleClass = () => {
    menu.classList.toggle("open");
    body.classList.toggle("hide");
};

buttons.forEach(
    (button) => {
        button.onclick = toggleClass;
    }
);