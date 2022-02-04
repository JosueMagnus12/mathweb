//Rounds a number to 2 decimal places
const roundNumber = (number) => {
    const product = number * 100;
    const wholeNumber = Math.round(product);
    const roundedNumber = wholeNumber / 100;
    return roundedNumber;
};

const writeResults = (area, perimeter, displayElem, lengthUnits) => {
    displayElem[0].textContent = area + lengthUnits.value;
    displayElem[1].textContent = "2";
    displayElem[2].textContent = perimeter + lengthUnits.value;
};
//Closure to clear a calculator
const singleSideShapeClearer = (side, lengthUnits, area, power, perimeter) => {
    return () => {
        side.value = "";
        lengthUnits.value = "cm";
        area.innerText = "";
        power.innerText = "";
        perimeter.innerText = "";
    };
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

squareButton.onclick = () => {
    const sqrSideLength = squareLength.value;

    if (sqrSideLength > 0) {
        const sqrArea = squareArea(sqrSideLength);
        const roundedArea = roundNumber(sqrArea);

        const sqrPeri = squarePerimeter(sqrSideLength);
        const roundedPeri = roundNumber(sqrPeri);

        writeResults(roundedArea,
            roundedPeri,
            [sqrAreaResult, sqrPower, sqrPerResult],
            squareLengthUnits);
    }
};

sqrClearButton.onclick = singleSideShapeClearer(
    squareLength,
    squareLengthUnits,
    sqrAreaResult,
    sqrPower,
    sqrPerResult);

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

        writeResults(roundedArea,
            roundedPeri,
            [triAreaResult, triPower, triPerResult],
            triLengthUnits);
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

cirButton.onclick = () => {
    const cirRadius = radius.value;

    if (cirRadius > 0) {
        const cirArea = circleArea(cirRadius);
        const roundedArea = roundNumber(cirArea);

        const cirCircum = circleCircumference(cirRadius);
        const roundedCircum = roundNumber(cirCircum);

        writeResults(roundedArea,
            roundedCircum,
            [cirAreaResult, cirPower, cirCircumResult],
            radiusUnits);
    }
};

cirClearButton.onclick = singleSideShapeClearer(
    radius,
    radiusUnits,
    cirAreaResult,
    cirPower,
    cirCircumResult);