import React from 'react'
import { useState, useEffect } from "react";

const Page2 = () => {
     const [selectedCrypto, setSelectedCrypto] = useState("eth");
     const [tokenValue, setTokenValue] = useState("");

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

     const handleCryptoChange = event => {
       setSelectedCrypto(event.target.value);
     };
  return (
    <div>
      <label htmlFor="crypto-select">Select a cryptocurrency:</label>
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
      <h1>
        {selectedCrypto.toUpperCase()} Token Value: {tokenValue}
      </h1>
    </div>
  );
}

export default Page2
