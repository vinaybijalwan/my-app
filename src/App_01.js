import React, { useState } from "react";

const App_01 = () => {
  const [items, setItems] = useState([]);

  const handleAddItem = () => {
    setItems([...items, "New item"]);
  };

  return (
    <div>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <button onClick={handleAddItem}>Add item</button>
    </div>
  );
};

export default App_01;