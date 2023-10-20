const currencyFirst = document.getElementById('currencyFirst');
const currencySecond = document.getElementById('currencySecond');
const count = document.getElementById('count');
const equal = document.getElementById('equal');
const exchangeRate = document.getElementById('exchangeRate');
const changeButton = document.querySelector('.fa-repeat');
updateRate();

function updateRate() {
    fetch(`https://v6.exchangerate-api.com/v6/e9869bca6f2e88f3f9e7015d/latest/${currencyFirst.value}`)
        .then((res) => res.json()).then((data) => {
            const rate = data.conversion_rates[currencySecond.value];
            equal.textContent = (count.value * rate).toFixed(2);
            exchangeRate.textContent = `1 ${currencyFirst.value} = ${rate} ${currencySecond.value}`;
        });
}

currencyFirst.addEventListener('change', updateRate);
currencySecond.addEventListener('change', updateRate);
count.addEventListener('input', updateRate);

changeButton.addEventListener('click', () => {
    var chacheValue = currencyFirst.value;
    currencyFirst.value = currencySecond.value;
    currencySecond.value = chacheValue;
    updateRate();
});