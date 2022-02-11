import { Square, Triangle, Circle } from './geometric-shapes.js';
import GeometryCalculator from './geometric-calc.js';

const mySqr = new Square();
const sqrCalc = new GeometryCalculator(
    mySqr,
    document.querySelectorAll(".sqr-area-side"),
    document.querySelectorAll(".sqr-perimeter-side"),
    document.querySelector("#sqr-length-units"),
    document.querySelector("#square-perimeter"),
    document.querySelector("#square-area"),
    document.querySelector("#sqr-power"),
    document.querySelector("#sqr-calc-btn"),
    document.querySelector("#sqr-clear")
);

const myTri = new Triangle();
const triCalc = new GeometryCalculator(
    myTri,
    document.querySelectorAll(".tri-area-side"),
    document.querySelectorAll(".tri-perimeter-side"),
    document.querySelector("#tri-length-units"),
    document.querySelector("#triangle-perimeter"),
    document.querySelector("#triangle-area"),
    document.querySelector("#tri-power"),
    document.querySelector("#tri-calc-btn"),
    document.querySelector("#tri-clear")
);

const myCir = new Circle();
const cirCalc = new GeometryCalculator(
    myCir,
    document.querySelectorAll(".cir-area-side"),
    document.querySelectorAll(".cir-perimeter-side"),
    document.querySelector("#cir-radius-units"),
    document.querySelector("#circle-circum"),
    document.querySelector("#circle-area"),
    document.querySelector("#cir-power"),
    document.querySelector("#cir-calc-btn"),
    document.querySelector("#cir-clear")
);