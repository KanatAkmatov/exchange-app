const initialState = {
    currency: {},
    base: 'RUB'
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
    switch (action.type) {
        case "GET_ALL_CURRENCY": {
            return {...state, currency: action.currency}
        }
        case 'SET_BASE': {
            return {...state, base: action.base}
        }
        default: return state
    }
}

export const getRate = (e) => {
   return {type: 'SET_BASE', base: e.target.value}
}

