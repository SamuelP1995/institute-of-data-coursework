
import { useState, useEffect } from "react";

import { useEmojiContext } from './EmojiContext.jsx';



const currencies = ['usd', 'aud', 'nzd', 'gbp', 'eur', 'sgd'];

function BitcoinRates() {
    const [currency, setCurrency] = useState(currencies[0]);
    const [bitcoinPrice, setBitcoinPrice] = useState(null);

    const { mood } = useEmojiContext();

    useEffect(() => {
        const url = `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`;

        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setBitcoinPrice(data.bitcoin[currency]);
            })
            .catch((error) => {
                console.error('Error fetching Bitcoin price:', error);
                setBitcoinPrice(null);
            });
        return () => { 
        }
    }, [currency]);

    const options = currencies.map((curr) => (<option value={curr} key={curr}>{curr}</option>));
    
    return (
        <div className="BitcoinRates componentBox">
            <h3>Bitcoin Exchange Rate</h3>
            <label>Choose currency:
                <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
                    {options}
                </select>
            </label>
            <div>
                {bitcoinPrice !== null ? (
                    <p>
                        Current Bitcoin Price in {currency}: {bitcoinPrice} {currency}
                    </p>
                ) : (
                    <p>Loading...</p>
                )}
            </div>

            <p> { mood } </p>
            
        </div>
    )
}

export default BitcoinRates;