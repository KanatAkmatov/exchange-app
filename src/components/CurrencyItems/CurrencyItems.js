import React from 'react';

const CurrencyItems = ({currentCurrency, base, rates}) => {
    return (
        <div className="currency-items">
            {currentCurrency.map((rate) => (
                <span className="currency-item">1{base} = {((rates[rate]) / rates[base]).toFixed(2)} {rate}</span>
            ))}
        </div>
    );
};

export default CurrencyItems;