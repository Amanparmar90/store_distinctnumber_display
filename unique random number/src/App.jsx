import React, { useState, useEffect } from 'react';

const RandomNumberDisplay = () => {
  const [randomNumber, setRandomNumber] = useState(null);
  const [uniqueNumber, setUniqueNumber] = useState([]);
  const [timeoutOccurred, setTimeoutOccurred] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const newRandomNumber = Math.floor(Math.random() * 100); 
      setRandomNumber(newRandomNumber);
      if (!uniqueNumber.includes(newRandomNumber)) {
        setUniqueNumber((prevUniqueNumber) => [...prevUniqueNumber, newRandomNumber]);
      }
    }, 1000); 

    const timeout = setTimeout(() => {
      clearInterval(interval);
      setTimeoutOccurred(true);
    }, 60000 / 2);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []); 

  return (
    <div>
      <h2>Random Number:</h2>
      {randomNumber !== null ? (
        <p>{randomNumber}</p>
      ) : (
        <p></p>
      )}
      
      <h2>Unique Numbers:</h2>
      {timeoutOccurred && (
        <div>
          <ul>
            {uniqueNumber.map((number, index) => (
              <li key={index}>{number}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default RandomNumberDisplay;
