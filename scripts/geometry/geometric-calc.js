export default class GeometryCalculator {
    constructor(shape, areaSides, perimeterSides, lengthUnits, perimeterDisplay,
        areaDisplay, powerDisplay, calculateButton, clearButton) {
        this.shape = shape;
        this.areaSides = areaSides;
        this.perimeterSides = perimeterSides;
        this.lengthUnits = lengthUnits;
        this.perimeterDisplay = perimeterDisplay;
        this.areaDisplay = areaDisplay;
        this.powerDisplay = powerDisplay;
        calculateButton.onclick = this.calculateAndDisplay.bind(this);
        clearButton.onclick = this.clear.bind(this);
        this.regEx = /^((?!-?0*\.?0+$)\d*\.?\d+$)/; //Positive numbers (whole or decimals). No negative or zero.
    }

    calculateAndDisplay() {
        const areaSidesValues = this.arrayOfValues(this.areaSides);
        const periSidesValues = this.arrayOfValues(this.perimeterSides);

        const validAreaSides = areaSidesValues.every(side => this.regEx.test(side));
        const validPerimeterSides = periSidesValues.every(side => this.regEx.test(side));

        if (validAreaSides && validPerimeterSides) {
            const area = this.shape.area(...areaSidesValues);
            const roundedArea = Math.round(area * 100) / 100;

            const perimeter = this.shape.perimeter(...periSidesValues);
            const roundedPeri = Math.round(perimeter * 100) / 100;

            this.areaDisplay.innerText = roundedArea + this.lengthUnits.value;
            this.powerDisplay.innerText = "2";
            this.perimeterDisplay.innerText = roundedPeri + this.lengthUnits.value;
        }
    }

    clear() {
        for (let node of this.areaSides) {
            node.value = "";
        }
        for (let node of this.perimeterSides) {
            node.value = "";
        }
        this.lengthUnits.value = "cm";
        this.perimeterDisplay.innerText = "";
        this.areaDisplay.innerText = "";
        this.powerDisplay.innerText = "";
    }

    arrayOfValues(nodeList) {
        const array = [];
        let value;
        for (let node of nodeList) {
            value = Number(node.value);
            array.push(value);
        }
        return array;
    }
}