import React from "react";
import { useState, useEffect } from "react";

const Page1 = () => {
  const [selectedCrypto, setSelectedCrypto] = useState("eth");
  const [tokenValue, setTokenValue] = useState("");
  const [iAmount, setIamount] = useState("");

  useEffect(() => {
    const ws = new WebSocket(
      `wss://stream.binance.com:9443/ws/${selectedCrypto}usdt@trade`
    );

    ws.onopen = () => {
      console.log(`Connected to ${selectedCrypto} stream`);
    };

    ws.onmessage = message => {
      const data = JSON.parse(message.data);
      setTokenValue(data.p);
    };

    return () => {
      ws.close();
      console.log(`Disconnected from ${selectedCrypto} stream`);
    };
  }, [selectedCrypto]);

  let handleSubmit = e => {
    e.preventDefault();
  };

  const handleCryptoChange = event => {
    setSelectedCrypto(event.target.value);
  };

  const handleIamount = e => {
    setIamount(e.target.value);
  };
  let coins = iAmount / tokenValue;

  return (
    <div>
      <main>
        <form onSubmit={handleSubmit}>
          <div class="value-section">
            <label for="current-value">Current value</label>
            <span id="current-value">&#x20B9;{tokenValue}</span>
          </div>
          <div>
            <label for="crypto-select">Select crypto coin:</label>
            <select
              id="crypto-select"
              value={selectedCrypto}
              onChange={handleCryptoChange}
            >
              <option value="eth">Ethereum</option>
              <option value="btc">Bitcoin</option>
              <option value="matic">Matic</option>
              <option value="bnb">Binance</option>
              <option value="xrp">XRP</option>
              <option value="sol">Solana</option>
            </select>
          </div>
          <div>
            <label for="amount-invested">Amount you want to invest:</label>
            <div class="input-wrapper">
              <input
                type="text"
                id="amount-invested"
                value={iAmount}
                onChange={handleIamount}
              />
              <span class="input-tag">INR</span>
            </div>
          </div>
          <div>
            <label for="estimate-number">
              Estimate Number of coins You will Get
            </label>
            <div class="input-wrapper">
              <input type="text" id="estimate-number" value={coins} />
            </div>
          </div>
          <button id="btn" type="submit">Buy</button>
        </form>
      </main>
    </div>
  );
};

export default Page1;
