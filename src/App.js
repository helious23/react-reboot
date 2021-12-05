import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [coinValue, setCoinValue] = useState({});
  const [amount, setAmount] = useState("");

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);

  const onAmountChange = (event) => {
    setAmount(event.target.value);
  };
  const onCoinChange = (event) => {
    setCoinValue(event.target.value);
    console.log(coinValue);
  };

  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <div>
          <div>
            <select onChange={onCoinChange}>
              <option value="0">Choose The Coin!</option>
              {coins.map((coin) => (
                <option key={coin.id} value={coin.quotes.USD.price}>
                  {coin.name} ({coin.symbol}) $ {coin.quotes.USD.price} USD
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="amount">
              How much $ you want to convert to coin?
            </label>
            <input
              id="amount"
              value={amount}
              type="number"
              placeholder="Write amout $"
              onChange={onAmountChange}
            />
          </div>
          <div>
            You can buy {parseInt(amount) / coinValue} {}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
