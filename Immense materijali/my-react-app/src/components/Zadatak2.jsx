import React, { useState, useEffect } from "react";

const DateTimeCalculator = () => {
  const [startDate, setStartDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endDate, setEndDate] = useState("");
  const [endTime, setEndTime] = useState("");
  const [timeDifference, setTimeDifference] = useState("");
  const [selectedCurrency, setSelectedCurrency] = useState("EUR");
  const [exchangeRate, setExchangeRate] = useState(1);

  //Stavke vezane uz valute
  useEffect(() => {
    const fetchExchangeRate = async () => {
      try {
        const response = await fetch(
          `https://api.exchangerate-api.com/v4/latest/${selectedCurrency}`
        );
        const data = await response.json();
        const rate = data.rates["EUR"];
        setExchangeRate(rate);
      } catch (error) {
        console.error("Error fetching exchange rates:", error);
      }
    };

    fetchExchangeRate();}, [selectedCurrency]);

  //Datumi
  const handleCalculate = () => {
    const startDateTime = new Date(`${startDate}T${startTime}`);
    const endDateTime = new Date(`${endDate}T${endTime}`);
    const difference = endDateTime.getTime() - startDateTime.getTime();
    const differenceInSeconds = Math.abs(difference / 1000);
    const hours = Math.floor(differenceInSeconds / 3600);
    const minutes = Math.floor((differenceInSeconds % 3600) / 60);

    //Napomena: alert će se pokazati nakon punog unosa datuma i vremena.
    if (endDateTime.getTime() < startDateTime.getTime()) {
      alert("Završni datum ne može biti prije početnog datuma.");
      return;
    }

    //Dio vezan uz specifične dnevnice
    let dayAmount = 0;

    if (hours >= 24) {
      dayAmount += Math.floor(hours / 24);
    } else if (hours >= 12 && hours <= 24) {
      dayAmount += 1;
    } else if (hours >= 8 && hours < 12) {
      dayAmount += 0.5;
    }

    const finalPay = dayAmount * 30 * exchangeRate;

    setTimeDifference(`${finalPay.toFixed(2)} ${selectedCurrency}.`);
  };

  //Prikaz
  return (
    <div>
      <div>
        <h1>Zadatak 2 - kalkulator nadnice</h1>

        <label>Početni datum:</label>
        <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)}/>

        <label>Početno vrijeme:</label>
        <input type="time" value={startTime} onChange={(e) => setStartTime(e.target.value)}/>
      </div>

      <div>
        <label>Završni datum:</label>
        <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)}/>

        <label>Završno vrijeme:</label>
        <input type="time" value={endTime} onChange={(e) => setEndTime(e.target.value)}/>
      </div>

      <div>
        <label>Valuta:</label>

        <select value={selectedCurrency} onChange={(e) => setSelectedCurrency(e.target.value)}>
          <option value="EUR">EUR</option>
          <option value="USD">USD</option>
        </select>
      </div>

      <button onClick={handleCalculate}>Izračunaj iznos</button>
      {timeDifference && <div>Novčani iznos: {timeDifference}</div>}
    </div>
  );
};

export default DateTimeCalculator;
