import React, {useEffect} from 'react';
import {BrowserRouter} from "react-router-dom";
import {Route, Switch} from "react-router";
import Currency from "./components/Main/Currency";
import Converter from "./components/Currency/Converter";
import {useDispatch} from "react-redux";
import axios from 'axios'
import './App.css'

const App = () => {
    // let topRates = 'http://api.exchangeratesapi.io/v1/latest?access_key=5a40240bb7531e50d1d5177a6dc34813&symbols=USD,AUD,CAD,JPY,GBP,AUD,CHF,CNY,KRW,INR,RUB,TRY,CZK'
    const dispatch = useDispatch()
    useEffect(() => {
        axios('http://api.exchangeratesapi.io/v1/latest?access_key=5a40240bb7531e50d1d5177a6dc34813').then(({data}) => dispatch({
            type: 'GET_ALL_CURRENCY',
            currency: data.rates
        }))
    }, [dispatch])
    return (
        <BrowserRouter>
            <div className="app-bg">
                <Switch>
                    <Route exact path="/" component={Currency}/>
                    <Route exact path="/converter" component={Converter}/>
                </Switch>
            </div>
        </BrowserRouter>
    );
};

export default App;