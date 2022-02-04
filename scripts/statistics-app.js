//tests if the input is a valid set of numbers (no negative 0's, no comma at the end, no letters)
const regex = /^((?!-0*\.?0+$)-?\d*\.?\d+, ?)+((?!-0*\.?0+$)-?\d*\.?\d+)$/;

//validates a set of numbers entered by the user
const validateSet = (userInput, regularEx) => {
    const set = userInput.value;
    const isValidSet = regularEx.test(set);

    if (isValidSet) {
        const dataSet = set.split(',');
        return dataSet.map(num => Number(num));
    }
};
//closure for clear btn
const makeClearer = (input, display) => {
    return () => {
        input.value = "";
        display.innerText = "";
    }
};
//closure for calc btn
const makeCalcLogic = (input, regularExpression, display, calcFn, validationFn) => {
    return () => {
        const nums = validationFn(input, regularExpression);

        if (!nums) {
            display.innerText = 'Invalid set'
        }
        else {
            display.innerText = calcFn(nums);
        }
    };
};

//MEAN
const meanSet = document.querySelector("#mean-data-set");
const meanResult = document.querySelector("#mean-result");
const meanCalcBtn = document.querySelector("#mean-calc-btn");
const meanClear = document.querySelector("#mean-clear");

const calculateMean = (array) => {
    const sum = array.reduce((a, b) => a + b);
    const average = sum / array.length;
    const average100 = average * 1000;
    const roundedAverage = Math.round(average100) / 1000;
    return roundedAverage;
};

meanCalcBtn.onclick = makeCalcLogic(meanSet, regex, meanResult, calculateMean, validateSet);

meanClear.onclick = makeClearer(meanSet, meanResult);

//MEDIAN
const medianSet = document.querySelector("#median-data-set");
const medianResult = document.querySelector("#median-result");
const medianCalcBtn = document.querySelector("#median-calc-btn");
const medianClear = document.querySelector("#median-clear");

const calculateMedian = (array) => {
    array.sort((a, b) => a - b);
    let medianIndex;

    if (array.length % 2 !== 0) {
        medianIndex = (array.length - 1) / 2;
        return array[medianIndex];
    }
    else {
        medianIndex = array.length / 2;
        const middle1 = array[medianIndex];
        const middle2 = array[medianIndex - 1];
        return (middle1 + middle2) / 2;
    }
};

medianCalcBtn.onclick = makeCalcLogic(medianSet, regex, medianResult, calculateMedian, validateSet);

medianClear.onclick = makeClearer(medianSet, medianResult);

//MODE
const modeSet = document.querySelector("#mode-data-set");
const modeResult = document.querySelector("#mode-result");
const modeCalcBtn = document.querySelector("#mode-calc-btn");
const modeClear = document.querySelector("#mode-clear");

const getRecords = (array) => {
    const records = [];
    let lastRecord;
    let lastDifferent = array[0];
    records.push([lastDifferent, 1]);

    for (let i = 1; i < array.length; i++) {
        if (array[i] !== lastDifferent) {
            lastDifferent = array[i];
            records.push([lastDifferent, 1]);
        }
        else {
            lastRecord = records.length - 1;
            records[lastRecord][1] += 1;
        }
    }
    return records;
};

const getFirstLargest = (records) => {
    let largest = records[0];

    for (let j = 1; j < records.length; j++) {
        if (records[j][1] > largest[1]) {
            largest = records[j];
        }
    }
    return largest;
};

const calculateMode = (array) => {
    array.sort((a, b) => a - b);
    const records = getRecords(array);
    const largest = getFirstLargest(records);
    const isThereMode = records.some(record => record[1] !== largest[1]);

    if (!isThereMode) {
        return 'No Mode';
    }

    let modes = records.filter(record => record[1] === largest[1]);

    if (modes.length > 1) {
        const result = modes.map(mode => mode[0]);
        return result.join();
    }
    else {
        return largest[0];
    }

};

modeCalcBtn.onclick = makeCalcLogic(modeSet, regex, modeResult, calculateMode, validateSet);

modeClear.onclick = makeClearer(modeSet, modeResult);