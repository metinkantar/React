import React, { useState } from "react";

const FunctionComponent = () => {
  const [sayi, setSayi] = useState(0);

  const sayiArttir = () => {
    setSayi(sayi + 1);
  };

  const sayiAzalt = () => {
    setSayi(sayi - 1);
  };

  return (
    <div>
      <h1>Function Component</h1>
      <h3>(Fonksiyon Bileşeni)</h3>
      <p>Counter : {sayi}</p>
      <button onClick={() => sayiArttir()}>Arttır</button>
      <button onClick={() => sayiAzalt()}>Azalt</button>
    </div>
  );
};

export default FunctionComponent;
