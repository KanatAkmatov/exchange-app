import React, {useState} from 'react';
import {useSelector} from "react-redux";
import './Currency.css'
import Pagination from "../Pagination/Pagination";
import CurrencyItems from "../CurrencyItems/CurrencyItems";
import CurrencyHeader from "../CurrencyHeader/CurrencyHeader";

const Currency = ({loading}) => {
    const rates = useSelector(s => s.currency.currency)
    const rateArr = Object.keys(rates)
    const base = useSelector(s => s.currency.base)
    const [currentPage, setCurrentPage] = useState(1)
    const [currenciesPerPage] = useState(15)

    const lastCurrencyIndex = currentPage * currenciesPerPage
    const firstCurrenctIndex = lastCurrencyIndex - currenciesPerPage
    const currentCurrency = rateArr.slice(firstCurrenctIndex, lastCurrencyIndex)

    const paginate = (number) => {
        setCurrentPage(number)
    }

    return (
        <div className="currency-block">
            <CurrencyHeader
                rateArr={rateArr}
            />
            <CurrencyItems
                currentCurrency={currentCurrency}
                base={base}
                rates={rates}
            />
            <Pagination
                currenciesPerPage={currenciesPerPage}
                totalCurrencies={rateArr.length}
                paginate={paginate}
            />
        </div>
    );
};

export default Currency;