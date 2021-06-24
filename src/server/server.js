const { exchangeRates } = require('exchange-rates-api');

(async () => {
    let rate = await exchangeRates().latest().base('USD').fetch();
    let json = rate.then(data => data.json())
    console.log(json)
})();