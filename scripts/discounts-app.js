const roundPrice = (price) => {
    const product = price * 100;
    const wholePrice = Math.round(product);
    const roundedPrice = wholePrice / 100;
    return roundedPrice;
};

const calcRealPrice = (price, discount) => {
    const realDiscount = (price * discount) / 100;
    const realPrice = price - realDiscount;
    return realPrice;
};

const writeDiscResult = (realPrice, display, currency) => {
    display.innerText = "$" + realPrice + " " + currency;
};

const price = document.querySelector("#price");
const currency = document.querySelector("#currency");
const discount = document.querySelector("#discount");
const result = document.querySelector("#disc-result");
const calcBtn = document.querySelector("#disc-calc");
const clearBtn = document.querySelector("#disc-clear");

calcBtn.onclick = () => {
    const validPrice = price.value > 0;
    const validDiscount = discount.value > 0 && discount.value < 100;

    if (validPrice && validDiscount) {
        const realPrice = calcRealPrice(price.value, discount.value);
        const roundedPrice = roundPrice(realPrice);
        writeDiscResult(roundedPrice, result, currency.value);

    }
};

clearBtn.onclick = () => {
    price.value = "";
    currency.value = "USD";
    discount.value = "";
    result.innerText = "";
};