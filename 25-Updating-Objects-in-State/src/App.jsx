import React, { useState } from "react";

const App = () => {
  const [data, setData] = useState({
    name: "aman",
    address: {
      city: "noida",
      country: "india",
    },
  });

  function handleChange(city) {
    setData({ ...data, address: { ...data.address, city } });
  }

  return (
    <div>
      <input
        type="text"
        placeholder="update city"
        onChange={(e) => {
          handleChange(e.target.value);
        }}
      />
      <h2>Name: {data.name}</h2>
      <h2>City: {data.address.city}</h2>
      <h2>Country: {data.address.country}</h2>
    </div>
  );
};

export default App;
