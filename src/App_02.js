import React, { useState } from "react";

const App_02 = () => {
  const [items, setItems] = useState([]);
  const [itemInputValue, setItemInputValue] = useState("");

  const handleAddItem = () => {
    setItems([...items, itemInputValue]);
    setItemInputValue("");
  };

  return (
    <div>
      <input
        type="text"
        value={itemInputValue}
        onChange={(event) => setItemInputValue(event.target.value)}
      />
      <button onClick={handleAddItem}>Add item</button>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default App_02;
