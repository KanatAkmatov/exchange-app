import React, {useState} from 'react';
import {useSelector} from "react-redux";
import './Converter.css'
import {useHistory} from "react-router-dom";

const Converter = () => {
    const history = useHistory()
    const rates = useSelector(s => s.currency.currency)
    const rateArr = Object.keys(rates)
    const [sum, setSum] = useState(0)
    const [fromCurr, setFromCurr] = useState('AED')
    const [toCurr, setToCurr] = useState('AED')
    return (
        <div className="block">
            <h2 className="block-title">Converter</h2>
            <div className="button">
                <div className="button-layer"></div>
                <button onClick={() => history.push('/')}>Exchange Rates</button>
            </div>
            <input className="convert-input" type="number" onChange={(e) => setSum(e.target.value)} min={0}/>
            <div className="block-select-wrapper">
                <select className="block-select" onChange={(e) => setFromCurr(e.target.value)}>
                    {rateArr.map(rate => (
                        <option className="block-select-item" value={rate}>{rate}</option>
                    ))}
                </select>
                <div>&#129122;</div>
                <select className="block-select" onChange={(e) => setToCurr(e.target.value)}>
                    {rateArr.map(rate => (
                        <option className="block-select-item" value={rate}>{rate}</option>
                    ))}
                </select>
            </div>
            <div className="block-result">{(sum / rates[fromCurr] * rates[toCurr]).toFixed(2)}</div>
        </div>
    );
};

export default Converter;