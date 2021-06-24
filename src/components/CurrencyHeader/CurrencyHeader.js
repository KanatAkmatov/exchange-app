import React from 'react';
import {getRate} from "../../redux/currencyReducer";
import {useDispatch} from "react-redux";
import {useHistory} from "react-router";
import './CurrencyHeader.css'

const CurrencyHeader = ({rateArr}) => {
    const history = useHistory()
    const dispatch = useDispatch()
    return (
        <div className="currency-header">
            <h2 className="currency-header-title">Select base currency</h2>
            <select className="currency-header-select" onChange={(e) => dispatch(getRate(e))}>
                {rateArr.map(rate => (
                    <option value={rate} key={rate}>{rate}</option>
                ))}
            </select>
            <div className="currency-button">
                <div className="currency-button-layer"></div>
                <button onClick={() => history.push('/converter')}>Converter</button>
            </div>
        </div>
    );
};

export default CurrencyHeader;