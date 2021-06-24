import {combineReducers, createStore, applyMiddleware} from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from 'redux-thunk'
import currency from './currencyReducer'

const reducer = combineReducers({
    currency
})
const middleware = [thunk]

const initialState = {}
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store