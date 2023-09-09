import React from 'react';
import { useBitcoinRates } from './BitcoinHook.jsx'; 



const currencies = ['usd', 'aud', 'nzd', 'gbp', 'eur', 'sgd'];

export default function BitcoinRates2() {
  const { currency, setCurrency, loading, bitcoinPrice, error } = useBitcoinRates();

  const options = currencies.map((curr) => (<option value={curr} key={curr}>{curr}</option>));

  return (
    <div className="BitcoinRates componentBox">
        <h3>Bitcoin Exchange Rate</h3>
        <label> 
            Choose currency:
            <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
                {options}
            </select>
        </label>
        <div>
            {loading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>Error: {error.message}</p>
            ) : (
                <p>
                Current Bitcoin Price in {currency}: {bitcoinPrice} {currency}
                </p>
            )}
        </div>
    </div>
  );
}
