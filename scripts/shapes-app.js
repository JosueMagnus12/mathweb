//ROunds a number to 2 decimal places
const roundNumber = (number) => {
    const product = number * 100;
    const wholeNumber = Math.round(product);
    const roundedNumber = wholeNumber / 100;
    return roundedNumber;
};

//Square
const squareLength = document.querySelector("#square-length");
const squareLengthUnits = document.querySelector("#sqr-length-units");
const sqrPerResult = document.querySelector("#square-perimeter");
const sqrAreaResult = document.querySelector("#square-area");
const sqrPower = document.querySelector("#sqr-power");
const sqrClearButton = document.querySelector("#sqr-clear");
const squareButton = document.querySelector("#sqr-calc-btn");

const squarePerimeter = (side) => {
    const perimeter = side * 4;
    return perimeter;
};

const squareArea = (side) => {
    const area = side * side;
    return area;
};

const writeSqrResults = (area, perimeter) => {
    sqrAreaResult.textContent = area + squareLengthUnits.value;
    sqrPower.textContent = "2";
    sqrPerResult.textContent = perimeter + squareLengthUnits.value;
};

squareButton.onclick = () => {
    const sqrSideLength = squareLength.value;

    if (sqrSideLength > 0) {
        const sqrArea = squareArea(sqrSideLength);
        const roundedArea = roundNumber(sqrArea);

        const sqrPeri = squarePerimeter(sqrSideLength);
        const roundedPeri = roundNumber(sqrPeri);

        writeSqrResults(roundedArea, roundedPeri);
    }
};

sqrClearButton.onclick = () => {
    squareLength.value = "";
    squareLengthUnits.value = "cm";
    sqrAreaResult.textContent = "";
    sqrPerResult.textContent = "";
    sqrPower.textContent = "";
};

//Triangle
const triSideA = document.querySelector("#tri-side-a");
const triLengthUnits = document.querySelector("#tri-length-units");
const triSideB = document.querySelector("#tri-side-b");
const triBase = document.querySelector("#tri-base");
const triHeight = document.querySelector("#tri-height");
const triPerResult = document.querySelector("#tri-perimeter");
const triAreaResult = document.querySelector("#tri-area");
const triPower = document.querySelector("#tri-power");
const triClearButton = document.querySelector("#tri-clear");
const triButton = document.querySelector("#tri-calc-btn");

const trianglePerimeter = (sideA, sideB, base) => {
    const perimeter = sideA + sideB + base;
    return perimeter;
};

const triangleArea = (base, height) => {
    const area = (base * height) / 2;
    return area;
};

const writeTriResults = (area, perimeter) => {
    triAreaResult.textContent = area + triLengthUnits.value;
    triPower.textContent = "2";
    triPerResult.textContent = perimeter + triLengthUnits.value;
};

triButton.onclick = () => {
    const triMeasures = [
        Number(triSideA.value),
        Number(triSideB.value),
        Number(triBase.value),
        Number(triHeight.value)];

    const isValidMeasure = !triMeasures.some(measure => measure <= 0);

    if (isValidMeasure) {
        const triArea = triangleArea(triMeasures[2], triMeasures[3]);
        const roundedArea = roundNumber(triArea);

        const triPeri = trianglePerimeter(triMeasures[0], triMeasures[1], triMeasures[2]);
        const roundedPeri = roundNumber(triPeri);

        writeTriResults(roundedArea, roundedPeri);
    }
};

triClearButton.onclick = () => {
    triSideA.value = "";
    triSideB.value = "";
    triBase.value = "";
    triHeight.value = "";
    triLengthUnits.value = "cm";
    triAreaResult.textContent = "";
    triPerResult.textContent = "";
    triPower.textContent = "";
};

//Circle
const radius = document.querySelector("#cir-radius");
const radiusUnits = document.querySelector("#cir-radius-units");
const cirAreaResult = document.querySelector("#circle-area");
const cirCircumResult = document.querySelector("#circle-circum");
const cirPower = document.querySelector("#cir-power");
const cirClearButton = document.querySelector("#cir-clear");
const cirButton = document.querySelector("#cir-calc-btn");

const circleCircumference = (radius) => {
    const diameter = radius * 2;
    const circumference = diameter * Math.PI;
    return circumference;
};

const circleArea = (radius) => {
    const area = (radius ** 2) * Math.PI;
    return area;
};

const writeCirResults = (area, perimeter) => {
    cirAreaResult.textContent = area + radiusUnits.value;
    cirPower.textContent = "2";
    cirCircumResult.textContent = perimeter + radiusUnits.value;
};

cirButton.onclick = () => {
    const cirRadius = radius.value;

    if (cirRadius > 0) {
        const cirArea = circleArea(cirRadius);
        const roundedArea = roundNumber(cirArea);

        const cirCircum = circleCircumference(cirRadius);
        const roundedCircum = roundNumber(cirCircum);

        writeCirResults(roundedArea, roundedCircum);
    }
};

cirClearButton.onclick = () => {
    radius.value = "";
    radiusUnits.value = "cm";
    cirAreaResult.textContent = "";
    cirCircumResult.textContent = "";
    cirPower.textContent = "";
};