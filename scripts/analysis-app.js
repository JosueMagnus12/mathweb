const regex = /^((?!-0*\.?0+$)-?\d*\.?\d+, ?)+((?!-0*\.?0+$)-?\d*\.?\d+)$/;

const validateSet = (userInput, regularEx) => {
    const set = userInput.value;
    const isValidSet = regularEx.test(set);

    if (isValidSet) {
        const dataSet = set.split(',');
        return dataSet.map(num => Number(num));
    }
};

const calculateMean = (array) => {
    const sum = array.reduce((a, b) => a + b);
    const average = sum / array.length;
    const average1000 = average * 1000;
    const roundedAverage = Math.round(average1000) / 1000;
    return roundedAverage;
};

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

const getSubArray = (array, percentage) => {
    const startRange = 100 - percentage;
    const startElement = (array.length * startRange) / 100;
    const elementsToPick = array.length - Math.floor(startElement);
    return array.splice(startElement, elementsToPick);
};

const calculateChoice = (subArray, array, measure) => {
    switch (measure) {
        case 'mean':
            const meanSubArray = calculateMean(subArray);
            const meanArray = calculateMean(array);
            return [meanSubArray, meanArray];
        case 'median':
            const medianSubArray = calculateMedian(subArray);
            const medianArray = calculateMedian(array);
            return [medianSubArray, medianArray];
        case 'mode':
            const modeSubArray = calculateMode(subArray);
            const modeArray = calculateMode(array);
            return [modeSubArray, modeArray];
    }
};


const anaDataSet = document.querySelector("#analyser-dataset");
const topPerc = document.querySelector("#top-percentages");
const measure = document.querySelector("#central-measures");
const topOptions = document.querySelectorAll(".top-option");
const measureOptions = document.querySelectorAll(".measure-option");
const topResPercentage = document.querySelector("#top-res-percentage");
const topResMeasure = document.querySelector("#top-res-measure");
const restResPercentage = document.querySelector("#rest-res-percentage");
const restResMeasure = document.querySelector("#rest-res-measure");
const topResult = document.querySelector("#top-result");
const restResult = document.querySelector("#rest-result");
const analysisCalcBtn = document.querySelector("#analysis-calc-btn");
const analysisClear = document.querySelector("#analysis-clear-btn");

analysisCalcBtn.onclick = () => {
    const centralMeasure = measure.value;
    const topPercent = topPerc.value;
    const set = validateSet(anaDataSet, regex);

    if (set) {
        const topSet = getSubArray(set, topPercent);
        const results = calculateChoice(topSet, set, centralMeasure);

        topResult.innerText = results[0];
        restResult.innerText = results[1];
    }
    else {
        topResult.innerText = "Invalid set";
        restResult.innerText = "Invalid set";
    }
};

analysisClear.onclick = () => {
    anaDataSet.value = "";
    measure.value = "mean";
    topPerc.value = "5";
    topResMeasure.innerHTML = "Mean";
    topResPercentage.innerText = topPerc.value;
    restResMeasure.innerText = "Mean";
    restResPercentage.innerText = 100 - topPerc.value;
    topResult.innerText = "";
    restResult.innerText = "";
};

topOptions.forEach(
    (option) => {
        option.onclick = () => {
            topResPercentage.innerText = option.innerText;
            restResPercentage.innerText = 100 - option.innerText;
        }
    }
);

measureOptions.forEach(
    (option) => {
        option.onclick = () => {
            topResMeasure.innerText = option.innerText;
            restResMeasure.innerText = option.innerText;
        }
    }
);