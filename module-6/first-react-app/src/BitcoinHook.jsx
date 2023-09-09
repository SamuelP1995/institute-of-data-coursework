
import { useState, useEffect, useReducer } from 'react';

const currencies = ['usd', 'aud', 'nzd', 'gbp', 'eur', 'sgd'];

function bitcoinRatesReducer(state, action) {
    switch (action.type) {
        case 'FETCH_REQUEST':
            return { ...state, loading: true };
        case 'FETCH_SUCCESS':
            return { ...state, loading: false, bitcoinPrice: action.payload };
        case 'FETCH_ERROR':
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};

export function useBitcoinRates(initialCurrency = currencies[0]) {
    const [currency, setCurrency] = useState(initialCurrency);
    const [state, dispatch] = useReducer(bitcoinRatesReducer, {
        loading: false,
        bitcoinPrice: null,
        error: null,
    });

    useEffect(() => {
        const url = `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`;
    
        dispatch({ type: 'FETCH_REQUEST' });
    
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                dispatch({ type: 'FETCH_SUCCESS', payload: data.bitcoin[currency] });
            })
            .catch((error) => {
                dispatch({ type: 'FETCH_ERROR', payload: error });
            });
    }, [currency]);
    
    return { currency, setCurrency, ...state };
};
